const assert = require('power-assert');
const builders = require('../../../src/syntax/builders');
const GlimmerSyntax = require('@sclaxton/glimmer-syntax');
const slotFixtures = require('../../fixtures/named-slots');
const astFixtures = require('../../fixtures/ast');

const glimmerBuilders = GlimmerSyntax.builders;

function assertValidSlotCaseExpression(expr) {
  assert.ok(
    (/\/eq$/).test(expr.path.original) &&
    expr.params.length > 0 &&
    expr.params[0].original === 'slot'
  );
}

function assertValidHashedParams(expr, params) {
  const values = (
    expr.hash &&
    Array.isArray(expr.hash.pairs) &&
    expr.hash.pairs
      .map(function(pair) { return pair.value; })
  );

  assert.equal(expr.path.original, 'hash');
  assert.deepEqual(values, params);
}

describe('buildSlotCaseExpression', function() {
  it('should return a valid slot case expression when passed slot', function() {
    const namedSlot = slotFixtures.namedBlockSlotNoProgram;
    assertValidSlotCaseExpression(builders.slotCaseExpression(namedSlot));
  });
});

describe('buildSlotIfBlock', function() {
  it('should return null if the empty list is passed', function() {
    assert.equal(builders.slotIfBlock(null), null);
  });

  it('should return an if-block with a valid case expression and an inverse program when passed a non-empty, non-singleton slot list', function() {
    const chain = slotFixtures.generateSlotChain(['block-1', 'block-2']);
    const ifBlock = builders.slotIfBlock(chain);
    assert.ok(ifBlock.path.original === 'if');
    assert.ok(ifBlock.inverse.type === 'Program');
    assertValidSlotCaseExpression(ifBlock.params[0]);
  });

  it('should return an if-block with no inverse program when passed a singleton slot list', function() {
    const singletonChain = slotFixtures.generateSlotChain(['block-1']);
    assert.ok(builders.slotIfBlock(singletonChain).inverse === null);
  });
});

describe('buildSlotCaseElifChain', function() {
  it('should return null if the empty list is passed', function() {
    assert.equal(builders.slotCaseElifChain(null), null);
  });

  it('should return a chained program object with an if-block body when passed a non-empty, non-singleton slot list', function() {
    const chain = slotFixtures.generateSlotChain(['block-1', 'block-2']);
    const elifChain = builders.slotCaseElifChain(chain);
    assert.ok(elifChain.body[0].type === 'BlockStatement' && elifChain.body[0].path.original === 'if');
    assert.ok(elifChain.chained);
  });

  it('should return a non-chained program object if passed a singleton slot list', function() {
    const singletonChain = slotFixtures.generateSlotChain(['block-1']);
    assert.ok(builders.slotCaseElifChain(singletonChain).chained === false);
  });
});

describe('buildHashedParams', function() {
  it('should return null when passed empty array of params', function() {
    assert.equal(builders.hashedParams([]), null);
  });

  it('should return valid params hash when passed non empty params', function() {
    const loc = astFixtures.sampleLoc;
    const params = [glimmerBuilders.path('param1', loc), glimmerBuilders.path('param2', loc), glimmerBuilders.path('param3', loc)];
    assertValidHashedParams(builders.hashedParams(params), params);
  });
});
