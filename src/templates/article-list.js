import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import ArticleBrowser from '../components/article-browser';

const Articles = ({ pageContext, data }) => (
  <Layout>
    <main>
      <SEO title="Статті" />
      <ArticleBrowser
        data={data.allMarkdownRemark.edges}
        context={pageContext}
      />
    </main>
  </Layout>
);

export default Articles;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "article" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    )
    {
      edges {
        node {
          fields {
            slug
            tags
            categories
          }
          excerpt
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
