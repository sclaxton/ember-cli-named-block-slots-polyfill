const Visitor = require('@sclaxton/handlebars').Visitor;
const GlimmerSyntax = require('@sclaxton/glimmer-syntax');
const builders = require('../syntax/builders');
const utils = require('../syntax/utils');

const glimmerBuilders = GlimmerSyntax.builders;

module.exports = PolyfillNamedBlockSlots;

function PolyfillNamedBlockSlots() {
  Visitor.apply(this, arguments);
  this.mutating = true;
}

PolyfillNamedBlockSlots.prototype = Object.create(Visitor.prototype);

PolyfillNamedBlockSlots.prototype.BlockStatement = function(block) {
  Visitor.prototype.BlockStatement.apply(this, arguments);

  // if this is a user-space block component
  if (block.path.original.indexOf('-') > -1) {
    const slotChain = utils.getSlotChain(block);
    const originalLoc = block.loc;
    const hashPairs = block.hash && block.hash.pairs;

    if (slotChain) {
      const slotHashPairs = utils.getNamedHasBlockHashPairs(slotChain);
      const newProgram = builders.slotCaseChainProgram(slotChain, originalLoc);
      const newHashPairs = hashPairs && hashPairs.length > 0 ? hashPairs.concat(slotHashPairs) : slotHashPairs;

      return glimmerBuilders.block(
        block.path,
        block.params,
        glimmerBuilders.hash(newHashPairs),
        newProgram,
        null,
        originalLoc
      );
    } else {
      const singletonSlotChain = utils.getSingletonAnonymousSlotChain(block);
      const newProgram = builders.slotCaseChainProgram(singletonSlotChain, originalLoc);

      return glimmerBuilders.block(
        block.path,
        block.params,
        hashPairs,
        newProgram,
        block.inverse,
        originalLoc
      );
    }
  }

  return;
};
