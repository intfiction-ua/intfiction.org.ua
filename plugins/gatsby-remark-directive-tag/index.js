const visit = require('unist-util-visit');
const h = require('hastscript');

function myRemarkPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective'
        || node.type === 'leafDirective'
        || node.type === 'containerDirective'
      ) {
        const data = node.data || (node.data = {}); // eslint-disable-line no-param-reassign
        const hast = h(node.name, node.attributes);

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
}

let transformer;

function pluginWrapper(options) {
  transformer = myRemarkPlugin.call(this, options);
}

module.exports = ({ markdownAST }) => {
  transformer(markdownAST);
};

module.exports.setParserPlugins = (options) => [ [ pluginWrapper, options ] ];
