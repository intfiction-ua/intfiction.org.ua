import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import ArticleBrowser from '../components/article-browser';

const ArticlesByCategory = ({ pageContext, data }) => (
  <Layout>
    <main>
      <SEO />
      <div className="content mx-4">
        <h1 className="title"><Link to="/articles">Статті</Link> в категорії “{pageContext.category}”</h1>
        <hr />
      </div>
      <ArticleBrowser
        data={data.allMarkdownRemark.edges}
        context={pageContext}
      />
    </main>
  </Layout>
);

export default ArticlesByCategory;

export const pageQuery = graphql`
  query CategoryPage($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "article" }, categories: { in: [$category] } } }
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
