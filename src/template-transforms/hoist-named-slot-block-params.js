const hb = require('@sclaxton/handlebars');
const Visitor = hb.Visitor;
const GlimmerSyntax = require('@sclaxton/glimmer-syntax');

const AST = hb.AST;
const glimmerBuilders = GlimmerSyntax.builders;

function HoistNamedSlotBlockParams(blockParams, hoistTo) {
  Visitor.apply(this, arguments);
  this.mutating = true;
  this.blockParams = blockParams;
  this.hoistTo = hoistTo;
}

HoistNamedSlotBlockParams.prototype = Object.create(Visitor.prototype);

HoistNamedSlotBlockParams.prototype.PathExpression = function(path) {
  Visitor.prototype.PathExpression.call(this, path);

  const isLocal = !AST.helpers.scopedId(path) && !path.depth;
  const isForwardSlashSeparated = path.original.indexOf('/') > -1;
  const paramIndex = this.blockParams.indexOf(path.parts[0]);

  if (isLocal && !isForwardSlashSeparated && paramIndex > -1) {
    const indexPathSegment = '[' + paramIndex + ']';
    const originalPathNestedSegment = path.original.slice(path.parts[0].length + 1);
    const newOriginalPath = (
      originalPathNestedSegment ?
      [this.hoistTo, indexPathSegment, originalPathNestedSegment] :
      [this.hoistTo, indexPathSegment]
    ).join('.');

    return glimmerBuilders.path(newOriginalPath, path.loc);
  }

  return;
};

module.exports = HoistNamedSlotBlockParams;
