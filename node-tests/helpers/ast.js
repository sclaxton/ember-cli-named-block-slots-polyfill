const assert = require('power-assert');

function normalizeAST(ast) {
  return JSON.parse(JSON.stringify(ast));
}

function astEqual(left, right) {
  return assert.deepEqual(normalizeAST(left), normalizeAST(right));
}

module.exports = {
  astEqual: astEqual
};
