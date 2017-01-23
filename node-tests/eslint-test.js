var lint = require('mocha-eslint');

var paths = [
  'bin',
  'ext',
  'lib',
  'node-tests'
];

var options = {};
lint(paths, options);
