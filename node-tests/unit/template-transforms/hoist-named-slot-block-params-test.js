const HoistNamedSlotBlockParams = require('../../../src/template-transforms/hoist-named-slot-block-params');
const astFixtures = require('../../fixtures/ast');
const astEqual = require('../../helpers/ast').astEqual;

describe('HoistNamedSlotBlockParams', function() {
  const transform = new HoistNamedSlotBlockParams(['param', 'otherParam'], 'params');

  it('should leave ASTs with none of the passed block params referenced unchanged', function() {
    const ast = astFixtures.generateBlockWithSlotChain(['block-a', 'block-b', 'block-c']);
    const result = transform.accept(ast);

    astEqual(ast, result);
  });

  it('should leave non-local references unchanged', function() {
    const ast = astFixtures.mustacheWithPath('this.param');
    const result = transform.accept(ast);

    astEqual(ast, result);
  });

  it('should correctly transform local paths that are prefixed with a block param reference', function() {
    const ignoreDepth = astFixtures.ignoreProps.bind(null, ['depth']);
    const ast = astFixtures.mustacheWithPath('param.anything');
    const result = transform.accept(ast);
    const expected = astFixtures.mustacheWithPath('params.[0].anything');

    astEqual(ignoreDepth(expected), ignoreDepth(result));
  });

  it('should leave slash separated paths unchanged', function() {
    const ast = astFixtures.mustacheWithPath('param/anything');
    const result = transform.accept(ast);

    astEqual(ast, result);
  });
});
