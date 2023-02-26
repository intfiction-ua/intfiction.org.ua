const path = require('path');
const { paginate } = require('./awesome-pagination');

const ITEMS_PER_PAGE = 10;

const GET_GARDEN_LIST = `
query {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "garden" } } }
  )
  {
    edges {
      node {
        id
      }
    }
  }
}
`;

const template = 'src/templates/garden.js';

async function gardenPagination({ graphql, actions }) {
  const { createPage } = actions;
  const posts = await graphql(GET_GARDEN_LIST);
  const items = posts.data.allMarkdownRemark.edges;
  const component = require.resolve(path.resolve(process.cwd(), template));
  paginate({
    createPage, // The Gatsby `createPage` function
    items, // An array of objects
    itemsPerPage: ITEMS_PER_PAGE, // How many items you want per page
    pathPrefix: '/garden', // Creates pages like `/blog`, `/blog/2`, etc
    component, // Just like `createPage()`
  });
}

module.exports = gardenPagination;
