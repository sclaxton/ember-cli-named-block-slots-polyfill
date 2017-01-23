const builders = require('./builders');
const GlimmerSyntax = require('@sclaxton/glimmer-syntax');
const HoistNamedSlotBlockParams = require('../template-transforms/hoist-named-slot-block-params');


const glimmerBuilders = GlimmerSyntax.builders;

const SLOT_STATEMENT_TYPE = 'NamedBlockSlotStatement';

module.exports = {
  getSlotChain: getSlotChain,
  getSingletonAnonymousSlotChain: getSingletonAnonymousSlotChain,
  getNamedHasBlockHashPairs: getNamedHasBlockHashPairs,
  camelize: camelize,
  hasChildSlots: hasChildSlots,
  getChildSlots: getChildSlots,
  chainToArray: chainToArray
};

function camelize(str) {
  return str.replace(
    (/-(\w)/g),
    function ($0, $1) {
      return $1.toUpperCase();
    }
  );
}

function transformProgramHoistedBlockParams(programNode) {
  const hoistTo = 'params';
  const blockParams = programNode.blockParams || [];
  const blockParamsTransform = new HoistNamedSlotBlockParams(blockParams, hoistTo);
  const transformedProgam = blockParamsTransform.accept(programNode);

  return glimmerBuilders.program(
    transformedProgam.body,
    [],
    false,
    transformedProgam.loc
  );
}

function hasChildSlots(node) {
  const inverseBody = node.inverse && node.inverse.body[0];
  return inverseBody && inverseBody.type === SLOT_STATEMENT_TYPE;
}

function getChildSlots(node) {
  if (hasChildSlots(node)) {
    const childSlot = node.inverse.body[0];
    return [
      builders.namedBlockSlot(
        childSlot.slotName,
        transformProgramHoistedBlockParams(childSlot.program),
        childSlot.loc
      ),
      getChildSlots(childSlot)
    ];
  }

  return null;
}

function getSingletonAnonymousSlotChain(block) {
  return [
    builders.namedBlockSlot(
      '|anonymous|',
      transformProgramHoistedBlockParams(block.program),
      block.loc
    ),
    null
  ];
}

function getSlotChain(block) {
  if (hasChildSlots(block) || !!(block.slotName)) {
    return [
      builders.namedBlockSlot(
        block.slotName,
        transformProgramHoistedBlockParams(block.program),
        block.loc
      ),
      getChildSlots(block)
    ];
  }

  return null;
}

function chainToArray(chain) {
  const recursivePush = function recursivePush(chain, array) {
    if (chain) {
      array.push(chain[0]);
      return recursivePush(chain[1], array);
    }
    return array;
  };
  return recursivePush(chain, []);
}

function getNamedHasBlockHashPairs(slotChain) {
  return chainToArray(slotChain).map(function (slot) {
    const slotName = slot.slotName !== '|anonymous|' ? camelize(slot.slotName) : '';
    const key = 'hasBlock::' + slotName;
    return glimmerBuilders.pair(key, glimmerBuilders.boolean(true));
  });
}
