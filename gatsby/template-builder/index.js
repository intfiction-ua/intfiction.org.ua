const path = require('path');

const articles = require('./articles');
const pages = require('./pages');
const garden = require('./garden');

async function templateBuilder({ graphql, actions }) {
  const { createPage } = actions;
  // create function for building pages by template
  const buildByTemplate = async ({ query, template }) => {
    const items = await graphql(query);
    items.data.allMarkdownRemark.nodes.forEach((node) => {
      const { slug } = node.fields;
      createPage({
        path: slug,
        component: require.resolve(path.resolve(process.cwd(), template)),
        context: { slug },
      });
    });
  };

  await buildByTemplate(articles);
  await buildByTemplate(pages);
  await buildByTemplate(garden);
}

module.exports = templateBuilder;
