const GlimmerSyntax = require('@sclaxton/glimmer-syntax');
const thisAddon = require('../../index');

const glimmerBuilders = GlimmerSyntax.builders;

function normalizedPathBuilder(pathString, loc) {
  const normalizedPathString = pathString.replace('/', '.');
  const path = glimmerBuilders.path(normalizedPathString, loc);

  path.original = pathString;

  return path;
}

function buildNamedBlockSlot(name, programNode, loc) {
  return {
    slotName: name,
    program: programNode,
    loc: loc
  };
}

function buildSlotCaseExpression(slot) {
  const originalLoc = slot.loc;
  return glimmerBuilders.sexpr(
    // use source location of the original source node for the following
    // since it's not useful to keep track of source info for source
    // code that does not exist, this at least give approximate location
    normalizedPathBuilder(thisAddon.name + '/eq', originalLoc),
    [glimmerBuilders.path('slot', originalLoc), glimmerBuilders.string(slot.slotName)],
    null,
    originalLoc
  );
}

function buildSlotIfBlock(slotChain) {
  if (slotChain) {
    const current = slotChain[0];
    const next = slotChain[1];
    const slotCaseExpression = buildSlotCaseExpression(current);
    const inverseProgram = buildSlotCaseElifChain(next);
    const originalLoc = current.loc;
    return glimmerBuilders.block(
      glimmerBuilders.path('if', originalLoc),
      [slotCaseExpression],
      null,
      current.program,
      inverseProgram,
      originalLoc
    );
  }

  return null;
}

function buildSlotCaseElifChain(slotChain) {
  if (slotChain) {
    const hasNext = !!slotChain[1];
    return glimmerBuilders.program(
      [buildSlotIfBlock(slotChain)],
      null,
      hasNext,
      slotChain[0].loc
    );
  }

  return null;
}

function buildSlotCaseChainProgram(slotChain, loc) {
  return glimmerBuilders.program(
    [buildSlotIfBlock(slotChain)],
    ['slot', 'params'],
    false,
    loc
  );
}

function buildHashedParams(params) {
  if (params && params.length > 0) {
    const originalLoc = params[0].loc;
    const hashPairs = params.map(function(param, index) {
      const key = index.toString();
      return glimmerBuilders.pair(key, param);
    });

    return glimmerBuilders.sexpr(
      // use source location of the original source node for the following
      // since it's not useful to keep track of source info for source
      // code that does not exist, this at least give approximate location
      glimmerBuilders.path('hash', originalLoc),
      null,
      glimmerBuilders.hash(hashPairs),
      originalLoc
    );
  }

  return null;
}

module.exports = {
  slotCaseChainProgram: buildSlotCaseChainProgram,
  slotCaseElifChain: buildSlotCaseElifChain,
  slotCaseExpression: buildSlotCaseExpression,
  namedBlockSlot: buildNamedBlockSlot,
  slotIfBlock: buildSlotIfBlock,
  hashedParams: buildHashedParams
};
