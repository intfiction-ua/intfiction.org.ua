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
        <SEO title={post.title} />
        <div className="content mx-4">
          <h1>{post.title}</h1>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <hr />
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
      }
      fields {
        slug
      }
    }
  }
`;
