/*eslint-env node*/
'use strict';

const VersionChecker = require('ember-cli-version-checker');

const THIS_ADDON_NAME = 'ember-cli-named-block-slots-polyfill';
const EMBER_CLI_HTMLBARS = 'ember-cli-htmlbars';

function recursivelyAddTemplateParseTransformToRegistry(current, plugin) {
  if (current) {
    const currentRegistry = current.registry;
    if (currentRegistry) {
      const emberCliHTMLBarsPlugin = currentRegistry
        .registeredForType('template')
        .find(addon => addon.name === EMBER_CLI_HTMLBARS);

      // remove ember-cli-htmlbars so we can parse transform before hbs gets parsed
      currentRegistry.remove('template', EMBER_CLI_HTMLBARS);
      currentRegistry.add('template', plugin);

      // add back ember-cli-htmlbars if it existed before we removed it
      if (emberCliHTMLBarsPlugin) {
        currentRegistry.add('template', emberCliHTMLBarsPlugin);
      }
    }
    for (let addon of current.addons) {
      if (addon.addons.every(child => child.name !== THIS_ADDON_NAME)) {
        recursivelyAddTemplateParseTransformToRegistry(addon, plugin);
      }
    }
  }
}

module.exports = {
  name: THIS_ADDON_NAME,


  // TODO: figure out cli + node support, for now supporting node v4+
  // init: function() {
  //   this._super.apply(arguments);
  //
  //   var checker = new VersionChecker(this);
  //   checker.for('ember-cli', 'npm').assertAbove('2.10');
  // },

  setupPreprocessorRegistry: function(type, registry) {
    if (type === 'parent') {
      const PolyfillNamedBlockSlots = require('./lib/broccoli/polyfill-named-block-slots');

      let fakeRootParent = {
        registry: registry,
        addons: this.parent.addons
      };

      recursivelyAddTemplateParseTransformToRegistry(fakeRootParent, {
        name: THIS_ADDON_NAME,
        ext: 'hbs',
        toTree: function toTree(tree) {
          return new PolyfillNamedBlockSlots(tree);
        }
      });
    }
  }
};
