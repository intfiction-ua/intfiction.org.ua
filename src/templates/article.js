import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import ArticleInfo from '../components/article-info';

const TranslationInfo = ({ content }) => (
  <blockquote className="is-family-primary">
    {content.author}, “<Link to={content.url} target="_blank" rel="noopener noreferrer">{content.source}</Link>”
    <br />
    Переклад: {content.translator}
  </blockquote>
);

const Article = ({ data }) => {
  const postNode = data.markdownRemark;
  const { frontmatter, fields } = postNode;
  return (
    <Layout>
      <main>
        <SEO title={frontmatter.title} />
        <div className="content is-family-secondary mx-4">
          <h1>{frontmatter.title}</h1>
          <ArticleInfo
            date={frontmatter.date}
            categories={fields.categories}
            tags={fields.tags}
          />
          {frontmatter.translation && <TranslationInfo content={frontmatter.translation} />}
          <hr />
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <hr />
        </div>
      </main>
    </Layout>
  );
};

export default Article;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        author
        translation {
          author
          source
          url
          translator
        }
      }
      fields {
        slug
        tags
        categories
      }
    }
  }
`;
