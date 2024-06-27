const path = require('path');
const cyrillicToTranslit = require('cyrillic-to-translit-js');
const { paginate } = require('./awesome-pagination');

const ITEMS_PER_PAGE = 5;

const GET_CATEGORIES = `
  query {
    allMarkdownRemark(filter: {fields: {nodeType: {eq: "article"}}}, limit: 2000) {
      group(field: {fields: {categories: SELECT}}) {
        fieldValue
      }
    }
  }
`;

const GET_ARTICLES_LIST = `
query CategoryList($category: String) {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "article" }, categories: { in: [$category] } } }
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

const convert2translit = (text) => cyrillicToTranslit({ preset: 'uk' }).transform(text, '_').toLowerCase();

const template = 'src/templates/category.js';

async function renderCategory(category, createPage, graphql) {
  const categorySlug = convert2translit(category);
  const posts = await graphql(GET_ARTICLES_LIST, { category });
  const items = posts.data.allMarkdownRemark.edges;
  const component = require.resolve(path.resolve(process.cwd(), template));
  paginate({
    createPage, // The Gatsby `createPage` function
    items, // An array of objects
    itemsPerPage: ITEMS_PER_PAGE, // How many items you want per page
    pathPrefix: `/category/${categorySlug}`, // Creates pages like `/blog`, `/blog/2`, etc
    component, // Just like `createPage()`
    context: {
      category,
      categorySlug,
    },
  });
}

async function categoryPagination({ graphql, actions }) {
  const { createPage } = actions;

  const categories = await graphql(GET_CATEGORIES);

  const renderCategories = categories.data.allMarkdownRemark.group.map(
    ({ fieldValue }) => renderCategory(fieldValue, createPage, graphql),
  );
  return Promise.all(renderCategories);
}

module.exports = categoryPagination;

/*
  pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/articles')
*/
