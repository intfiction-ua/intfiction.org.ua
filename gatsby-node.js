const addMarkdownFields = require('./gatsby/add-markdown-fields');
const articlePagination = require('./gatsby/article-pagination');
const categoryPagination = require('./gatsby/category-pagination');
const tagPagination = require('./gatsby/tag-pagination');
const templateBuilder = require('./gatsby/template-builder');

// generate slug out of path for articles
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    addMarkdownFields(node, getNode, createNodeField);
  }
};

exports.createPages = async (args) => {
  await templateBuilder(args);
  await articlePagination(args);
  await categoryPagination(args);
  await tagPagination(args);
};
