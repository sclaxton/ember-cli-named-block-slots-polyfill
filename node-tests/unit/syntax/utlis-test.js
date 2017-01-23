const assert = require('power-assert');
const utils = require('../../../src/syntax/utils');
const astFixtures = require('../../fixtures/ast');

describe('chainToArray', function() {
  it('should return empty array for null chain', function() {
    const emptyChain = null;
    assert.deepEqual(utils.chainToArray(emptyChain), []);
  });

  it('should return array of single element for a singleton chain', function() {
    const singletonChain = [1, null];
    assert.deepEqual(utils.chainToArray(singletonChain), [1]);
  });

  it('should return correct array of elements in a longer chain', function() {
    const chain = [1, [2, [3, [4, null]]]];
    assert.deepEqual(utils.chainToArray(chain), [1, 2, 3, 4]);
  });
});

describe('camelize', function() {
  it('should camelize dasherized strings', function() {
    const string1 = 'some-string';
    const string2 = 'a-longer-dasherized-string';
    assert.deepEqual(utils.camelize(string1), 'someString');
    assert.deepEqual(utils.camelize(string2), 'aLongerDasherizedString');
  });

  it('should leave a single word unchanged', function() {
    const word = 'word';
    assert.deepEqual(utils.camelize(word), 'word');
  });

  it('should camelize dasherized string that has caps', function() {
    const someDashCaps = 'some-Dash-Caps';
    assert.deepEqual(utils.camelize(someDashCaps), 'someDashCaps');
  });
});

describe('hasChildSlots', function() {
  it('should return true when block has named slots', function() {
    assert.ok(utils.hasChildSlots(astFixtures.blockWithNamedSlots));
  });

  it('should return false when block has no named slots', function() {
    assert.ok(!utils.hasChildSlots(astFixtures.blockWithNoNamedSlots));
  });
});

describe('getChildSlots', function() {
  it('should return linked list of child slots when block has named slots', function() {
    const slotNames = ['block-1', 'block-2', 'block-3'];
    const ast = astFixtures.generateBlockWithSlotChain(slotNames);
    const childSlots = utils.getChildSlots(ast);
    const childSlotsArray = utils.chainToArray(childSlots);
    const resultSlotNames = childSlotsArray.map(function(slot) { return slot.slotName; });
    assert.deepEqual(resultSlotNames, slotNames);
  });

  it('should return empty list when passed a node with no child slots', function() {
    const ast = astFixtures.blockWithNoNamedSlots;
    const childSlots = utils.getChildSlots(ast);
    assert.deepEqual(childSlots, null);
  });
});

describe('getSlotChain', function() {
  it('should return a linked list of slots when passed a block with slot section in path and child slots', function() {
    const slotNames = ['block-0', 'block-1', 'block-2'];
    const ast = astFixtures.generateBlockWithSlotPathAndSlotChain(slotNames);
    const slots = utils.getSlotChain(ast);
    const slotsArray = utils.chainToArray(slots);
    const resultSlotNames = slotsArray.map(function(slot) { return slot.slotName; });
    assert.deepEqual(resultSlotNames, slotNames);
  });

  it('should return a linked list of slots beginning with the anonymous slot when passed a block with no slot section in path and child slots', function() {
    const slotNames = ['block-0', 'block-1', 'block-2'];
    const ast = astFixtures.generateBlockWithSlotChain(slotNames);
    const slots = utils.getSlotChain(ast);
    const slotsArray = utils.chainToArray(slots);
    const resultSlotNames = slotsArray.map(function(slot) { return slot.slotName; });
    assert.deepEqual(resultSlotNames, ['|anonymous|'].concat(slotNames));
  });

  it('should return the singleton list of anonymous slot when block path has slot section but no children slots', function() {
    const singletonSlot = ['block-0'];
    const ast = astFixtures.generateBlockWithSlotPathAndSlotChain(singletonSlot);
    const slots = utils.getSlotChain(ast);
    const slotsArray = utils.chainToArray(slots);
    const resultSlotNames = slotsArray.map(function(slot) { return slot.slotName; });
    assert.deepEqual(resultSlotNames, singletonSlot);
  });
});

describe('getNamedHasBlockHashPairs', function() {
  it('should return array of hash pairs with hasBlock keys for each slot in the slot chain', function() {
    const slotNames = ['block-foo', 'block-bar', 'block-baz'];
    const ast = astFixtures.generateBlockWithSlotPathAndSlotChain(slotNames);
    const slots = utils.getSlotChain(ast);
    const hashPairs = utils.getNamedHasBlockHashPairs(slots);
    const hashPairKeys = hashPairs.map(function(hash) { return hash.key; });
    assert.deepEqual(hashPairKeys, ['hasBlock::blockFoo', 'hasBlock::blockBar', 'hasBlock::blockBaz']);
  });

  it('should return an array containing `hasBlock::` if the anonymous block is present in passed slots', function() {
    const slotNames = ['block-foo'];
    const ast = astFixtures.generateBlockWithSlotChain(slotNames);
    const slots = utils.getSlotChain(ast);
    const hashPairs = utils.getNamedHasBlockHashPairs(slots);
    const hashPairKeys = hashPairs.map(function(hash) { return hash.key; });
    assert.deepEqual(hashPairKeys, ['hasBlock::', 'hasBlock::blockFoo']);
  });
});
