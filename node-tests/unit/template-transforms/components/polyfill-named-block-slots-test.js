const PolyfillNamedBlockSlotsComponent = require('../../../../lib/template-transforms/components/polyfill-named-block-slots');
const astFixtures = require('../../../fixtures/ast');
const astEqual = require('../../../helpers/ast').astEqual;

describe('PolyfillNamedBlockSlotsComponent', function() {
  const transform = new PolyfillNamedBlockSlotsComponent();

  it('should leave ASTs with no slot yields or named hasBlock references unchanged', function(){
    const ast = astFixtures.programNoNamedYields;
    const result = transform.accept(ast);

    astEqual(ast, result);
  });

  it('should correctly transform named slot yields', function() {
    const ignoreLocStripDepth = astFixtures.ignoreProps.bind(null, ['loc', 'strip', 'closeStrip', 'openStrip', 'inverseStrip', 'depth']);
    const ast = astFixtures.untransformedProgramWithNamedYield;
    const result = transform.accept(ast);
    const expected = astFixtures.transformedProgramWithNamedYield;

    astEqual(ignoreLocStripDepth(expected), ignoreLocStripDepth(result));
  });

  it('should correctly transform anonymous slot yields', function() {
    const ignoreLocStripDepth = astFixtures.ignoreProps.bind(null, ['loc', 'strip', 'closeStrip', 'openStrip', 'inverseStrip', 'depth']);
    const ast = astFixtures.untransformedProgramWithAnonymousYield;
    const result = transform.accept(ast);
    const expected = astFixtures.transformedProgamWithAnonymousYield;

    astEqual(ignoreLocStripDepth(expected), ignoreLocStripDepth(result));
  });

  it('should correctly transform named hasBlock references', function() {
    const ignoreLocStripDepth = astFixtures.ignoreProps.bind(null, ['loc', 'strip', 'closeStrip', 'openStrip', 'inverseStrip', 'depth']);
    const ast = astFixtures.untransformedProgramWithHasBlock;
    const result = transform.accept(ast);
    const expected = astFixtures.transformedProgramWithHasBlock;

    astEqual(ignoreLocStripDepth(expected), ignoreLocStripDepth(result));
  });
});
