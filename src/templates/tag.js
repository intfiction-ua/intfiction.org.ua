import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import ArticleBrowser from '../components/article-browser';

const ArticlesByTag = ({ pageContext, data }) => (
  <Layout>
    <main>
      <SEO title={`Статті за тегом "${pageContext.tag}"`} />
      <div className="content mx-4">
        <h1 className="title"><Link to="/articles/">Статті</Link> за тегом “{pageContext.tag}”</h1>
        <hr />
      </div>
      <ArticleBrowser
        data={data.allMarkdownRemark.edges}
        context={pageContext}
      />
    </main>
  </Layout>
);

export default ArticlesByTag;

export const pageQuery = graphql`
  query TagPage($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "article" }, tags: { in: [$tag] } } }
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
