const path = require('path');
const { paginate } = require('./awesome-pagination');

const ITEMS_PER_PAGE = 5;

const GET_ARTICLES_LIST = `
query {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "article" } } }
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

const template = 'src/templates/article-list.js';

async function articlePagination({ graphql, actions }) {
  const { createPage } = actions;
  const posts = await graphql(GET_ARTICLES_LIST);
  const items = posts.data.allMarkdownRemark.edges;
  const component = require.resolve(path.resolve(process.cwd(), template));
  paginate({
    createPage, // The Gatsby `createPage` function
    items, // An array of objects
    itemsPerPage: ITEMS_PER_PAGE, // How many items you want per page
    pathPrefix: '/articles', // Creates pages like `/blog`, `/blog/2`, etc
    component, // Just like `createPage()`
  });
}

module.exports = articlePagination;

/*
  pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/articles')
*/
