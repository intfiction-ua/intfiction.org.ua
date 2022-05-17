const query = `
query {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "page" } } }
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

const template = 'src/templates/page.js';

module.exports = {
  query,
  template,
};
