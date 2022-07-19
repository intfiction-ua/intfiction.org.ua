import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';

const Page = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  return (
    <Layout>
      <main>
        <SEO title={post.title} description={post.description} />
        <div className="content mx-4">
          <h1>{post.title}</h1>
          <article dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <br />
        </div>
      </main>
    </Layout>
  );
};

export default Page;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
    }
  }
`;
