const query = `
query {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "article" } } }
  )
  {
    nodes {
      fields {
        slug
      }
    }
  }
}
`;

const template = 'src/templates/article.js';

module.exports = {
  query,
  template,
};
