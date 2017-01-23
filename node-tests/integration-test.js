const fs = require('fs');
const path = require('path');
const assert = require('power-assert');
const lib = require('../lib');

const TEMPLATE_FIXTURE_PATH = path.join(__dirname, 'fixtures/templates');

function stripNewlineWhitespace(str) {
  return str.replace(/[\n\s]/g, '');
}

function assertTemplateEqual(result, expected) {
  const resultNormalized = stripNewlineWhitespace(result);
  const expectedNormalized = stripNewlineWhitespace(expected);

  assert.equal(resultNormalized, expectedNormalized);
}

function loadTemplateFixture(name) {
  return fs.readFileSync(path.join(TEMPLATE_FIXTURE_PATH, name) + '.hbs', 'utf8');
}

describe('transformNonComponentTemplate', function() {
  it('should rewrite blocks with named slots to block with an if/else case chain', function() {
    const blockWithSlots = loadTemplateFixture('block-with-slots');
    const expected = loadTemplateFixture('expected-block-with-slots-transform');
    const result = lib.transformNonComponentTemplate(blockWithSlots);

    assertTemplateEqual(result, expected);
  });

  it('should rewrite blocks with named slots and block params to block with an if/else case chain with hashed block params', function() {
    const blockWithSlotsAndBlockParams = loadTemplateFixture('block-with-slots-and-block-params');
    const expected = loadTemplateFixture('expected-block-with-slots-and-block-params-transform');
    const result = lib.transformNonComponentTemplate(blockWithSlotsAndBlockParams);

    assertTemplateEqual(result, expected);
  });

  it('should rewrite blocks with a singleton named slot to an if statement', function() {
    const blockWithSlotsAndBlockParams = loadTemplateFixture('block-with-singleton-named-slot');
    const expected = loadTemplateFixture('expected-block-with-singleton-named-slot-transform');
    const result = lib.transformNonComponentTemplate(blockWithSlotsAndBlockParams);

    assertTemplateEqual(result, expected);
  });
});

describe('transformComponentTemplate', function() {
  it('should rewrite named yields to yields passing a slot name and hashed params', function() {
    const blockWithSlots = loadTemplateFixture('named-yields');
    const expected = loadTemplateFixture('expected-named-yields-transform');
    const result = lib.transformComponentTemplate(blockWithSlots);

    assertTemplateEqual(result, expected);
  });

  it('should rewrite hasBlock references to hasBlock::', function() {
    const blockWithSlotsAndBlockParams = loadTemplateFixture('has-block');
    const expected = loadTemplateFixture('expected-has-block-transform');
    const result = lib.transformComponentTemplate(blockWithSlotsAndBlockParams);

    assertTemplateEqual(result, expected);
  });
});
