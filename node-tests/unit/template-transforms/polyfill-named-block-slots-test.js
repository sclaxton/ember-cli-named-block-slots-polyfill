const PolyfillNamedBlockSlots = require('../../../src/template-transforms/polyfill-named-block-slots');
const astFixtures = require('../../fixtures/ast');
const astEqual = require('../../helpers/ast').astEqual;

describe('PolyfillNamedBlockSlots', function() {
  const transform = new PolyfillNamedBlockSlots();
  const ignoreLocStripDepth = astFixtures.ignoreProps.bind(null, ['loc', 'strip', 'closeStrip', 'openStrip', 'inverseStrip', 'depth']);

  it('should hoist block params of the program of a dasherized block with no slots', function() {
    const ast = astFixtures.blockWithNoNamedSlots;
    const expected = astFixtures.transformedBlockWithNoNamedSlots;
    const result = transform.accept(ast);

    astEqual(ignoreLocStripDepth(expected), ignoreLocStripDepth(result));
  });

  it('should correctly transform slot chain to an if/else chain', function() {
    const ast = astFixtures.untransformedBlockWithSlots;
    const result = transform.accept(ast);
    const expected = astFixtures.transformedBlockWithSlots;

    astEqual(ignoreLocStripDepth(expected), ignoreLocStripDepth(result));
  });

  it('should correctly transform a block with a sinlge non-anonymous slot', function() {
    const ast = astFixtures.untransformedBlockWithSlotPath;
    const result = transform.accept(ast);
    const expected = astFixtures.transformedBlockWithSlotPath;

    astEqual(ignoreLocStripDepth(expected), ignoreLocStripDepth(result));
  });
});
