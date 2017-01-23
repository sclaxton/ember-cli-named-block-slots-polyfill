const path = require('path');
const Filter = require('broccoli-persistent-filter');
const lib = require('../index');

function PolyfillNamedBlockSlots(inputTree, _options) {
  if (!(this instanceof PolyfillNamedBlockSlots)) {
    return new PolyfillNamedBlockSlots(inputTree, _options);
  }

  var options = _options || {};
  if (!options.hasOwnProperty('persist')) {
    options.persist = true;
  }

  Filter.call(this, inputTree, options); // this._super()

  this.options = options || {};
  this.inputTree = inputTree;
}

PolyfillNamedBlockSlots.prototype = Object.create(Filter.prototype);
PolyfillNamedBlockSlots.prototype.constructor = PolyfillNamedBlockSlots;
PolyfillNamedBlockSlots.prototype.extensions = ['hbs', 'handlebars'];
PolyfillNamedBlockSlots.prototype.targetExtension = 'hbs';

PolyfillNamedBlockSlots.prototype.baseDir = function() {
  return path.resolve(__dirname, '../../');
};

PolyfillNamedBlockSlots.prototype.processString = function (string, relativePath) {
  return lib.transformTemplate(string, relativePath);
};

module.exports = PolyfillNamedBlockSlots;
