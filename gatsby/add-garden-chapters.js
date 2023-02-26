const path = require('path');

const query = `
  query {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "garden" } } }
      limit: 2000
    ) {
      group(field: fields___yyyymm) {
        fieldValue
        totalCount
      }
    }
  }
`;

async function buildGardenChapters({ graphql, actions }) {
  const { createPage } = actions;
  // create function for building pages by template
  const buildByTemplate = async (template) => {
    const items = await graphql(query);
    items.data.allMarkdownRemark.group.forEach((item) => {
      const yyyymm = item.fieldValue;
      createPage({
        path: `/gardenchapter/${yyyymm}/`,
        component: require.resolve(path.resolve(process.cwd(), template)),
        context: { yyyymm },
      });
    });
  };

  await buildByTemplate('src/templates/gardenchapter.js');
}

module.exports = buildGardenChapters;
