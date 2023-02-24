const { createFilePath } = require('gatsby-source-filesystem');

function addMarkdownFields(node, getNode, createNodeField) {
  // nodeType
  const nodeType = getNode(node.parent).sourceInstanceName;
  createNodeField({
    node,
    name: 'nodeType',
    value: nodeType,
  });

  // slug
  const slug = createFilePath({ node, getNode, basePath: 'content' });
  createNodeField({
    node,
    name: 'slug',
    value: `/${nodeType}${slug}`,
  });

  // categories
  const frontmatterCategories = node.frontmatter.categories;
  if (frontmatterCategories) {
    const categories = frontmatterCategories.map((item) => item.toLowerCase());
    createNodeField({
      node,
      name: 'categories',
      value: categories,
    });
  }

  // tags
  const frontmatterTags = node.frontmatter.tags;
  if (frontmatterTags) {
    const tags = frontmatterTags.map((item) => item.toLowerCase());
    createNodeField({
      node,
      name: 'tags',
      value: tags,
    });
  }

  // garden
  if (nodeType === 'garden') {
    const recordDate = slug.match(/\/([^/]+?)\/$/);
    const itemDate = recordDate[1];
    createNodeField({
      node,
      name: 'date',
      value: itemDate,
    });

    createNodeField({
      node,
      name: 'yyyymm',
      value: itemDate.substring(0, 7),
    });
  }
}

module.exports = addMarkdownFields;
