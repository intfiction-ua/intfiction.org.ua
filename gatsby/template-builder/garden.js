const query = `
query {
  allMarkdownRemark(
    filter: { fields: { nodeType: { eq: "garden" } } }
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

const template = 'src/templates/gardenitem.js';

module.exports = {
  query,
  template,
};
