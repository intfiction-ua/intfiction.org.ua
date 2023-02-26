const path = require('path');
const cyrillicToTranslit = require('cyrillic-to-translit-js');
const { paginate } = require('./awesome-pagination');

const ITEMS_PER_PAGE = 5;

const GET_TAGS = `
  query {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "article" } } }
      limit: 2000
    ) {
      group(field: fields___tags) {
        fieldValue
      }
    }
  }
`;

const GET_ARTICLES_LIST = `
query TagList($tag: String) {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "article" }, tags: { in: [$tag] } } }
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

const template = 'src/templates/tag.js';

async function renderCategory(tag, createPage, graphql) {
  const tagSlug = convert2translit(tag);
  const posts = await graphql(GET_ARTICLES_LIST, { tag });
  const component = require.resolve(path.resolve(process.cwd(), template));
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allMarkdownRemark.edges, // An array of objects
    itemsPerPage: ITEMS_PER_PAGE, // How many items you want per page
    pathPrefix: `/tag/${tagSlug}`, // Creates pages like `/blog`, `/blog/2`, etc
    component, // Just like `createPage()`
    context: {
      tag,
      tagSlug,
    },
  });
}

async function tagPagination({ graphql, actions }) {
  const { createPage } = actions;

  const tags = await graphql(GET_TAGS);

  const renderTags = tags.data.allMarkdownRemark.group.map(
    ({ fieldValue }) => renderCategory(fieldValue, createPage, graphql),
  );
  return Promise.all(renderTags);
}

module.exports = tagPagination;
