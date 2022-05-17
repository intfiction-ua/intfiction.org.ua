import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import Sidebar from '../components/main-sidebar';
import ArticleList from '../components/article-list';

const Main = ({ data }) => (
  <Layout>
    <main>
      <SEO />
      <div className="columns">
        <div className="column is-3">
          <Sidebar />
        </div>
        <div className="column">
          <ArticleList articles={data.allMarkdownRemark.edges} />
        </div>
      </div>
    </main>
  </Layout>
);

export default Main;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "article" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
