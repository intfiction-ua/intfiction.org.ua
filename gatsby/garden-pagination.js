const path = require('path');
const { paginate } = require('./awesome-pagination');

const ITEMS_PER_PAGE = 10;

const GET_GARDEN_LIST = `
query {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "garden" } } }
    sort: { fields: [fields___date], order: DESC }
  )
  {
    edges {
      node {
        fields {
          date
        }
      }
    }
  }
}
`;

const template = 'src/templates/garden.js';

async function gardenPagination({ graphql, actions }) {
  const { createPage } = actions;
  const posts = await graphql(GET_GARDEN_LIST);
  const component = require.resolve(path.resolve(process.cwd(), template));
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allMarkdownRemark.edges, // An array of objects
    itemsPerPage: ITEMS_PER_PAGE, // How many items you want per page
    pathPrefix: '/garden', // Creates pages like `/blog`, `/blog/2`, etc
    component, // Just like `createPage()`
  });
}

module.exports = gardenPagination;
