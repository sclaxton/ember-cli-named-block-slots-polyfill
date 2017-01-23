const PolyfillNamedBlockSlots = require('../polyfill-named-block-slots');
const GlimmerSyntax = require('@sclaxton/glimmer-syntax');
const builders = require('../../syntax/builders');

const glimmerBuilders = GlimmerSyntax.builders;

module.exports = PolyfillNamedBlockSlotsComponent;

function PolyfillNamedBlockSlotsComponent() {
  PolyfillNamedBlockSlots.apply(this, arguments);
  this.mutating = true;
}

PolyfillNamedBlockSlotsComponent.prototype = Object.create(PolyfillNamedBlockSlots.prototype);

function buildSlotYield(yieldMustache, slotName) {
  const hashedParams = builders.hashedParams(yieldMustache.params);
  const slotNameParam  = glimmerBuilders.string(slotName);
  const newParams  = hashedParams ? [slotNameParam, hashedParams] : [slotNameParam];
  return glimmerBuilders.mustache(
    glimmerBuilders.path('yield', yieldMustache.path.loc),
    newParams,
    null,
    false,
    yieldMustache.loc
  );
}

PolyfillNamedBlockSlotsComponent.prototype.MustacheStatement = function (_mustache) {
  const mustache = PolyfillNamedBlockSlots.prototype.MustacheStatement.apply(this, arguments) || _mustache;
  const originalPath = mustache.path.original;

  if (originalPath === 'yield') {
    return buildSlotYield(mustache, '|anonymous|');
  }

  const yieldMatchPair = originalPath.match(/yield::([-\w]*)/);
  const yieldSlotName = yieldMatchPair && yieldMatchPair[1];

  if (yieldSlotName) {
    return buildSlotYield(mustache, yieldSlotName);
  }

  return;
};

PolyfillNamedBlockSlotsComponent.prototype.PathExpression = function (_path) {
  const path = PolyfillNamedBlockSlots.prototype.PathExpression.apply(this, arguments) || _path;

  if (path.original === 'hasBlock') {
    return glimmerBuilders.path('hasBlock::', path.loc);
  }

  return;
};
