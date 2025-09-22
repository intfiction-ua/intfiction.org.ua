import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import GardenItem from '../components/garden-item';
import { formatDate } from '../utils';

const GardenItemPage = ({ data }) => {
  const postNode = data.markdownRemark;
  const { html, excerpt, fields } = postNode;
  const itemDate = formatDate(fields.postdate);
  const title = `Сад переплетених стежок, ${itemDate}`;
  return (
    <Layout>
      <main>
        <SEO
          title={title}
          description={excerpt}
          path={fields.slug}
        />
        <div className="content mx-4">
          <Link to="/garden/" className="hoverable_link">
            <h2 className="title">
              Сад переплетених стежок, {itemDate}
            </h2>
          </Link>
        </div>
        <div className="content is-family-secondary">
          <GardenItem fields={fields} html={html} hideHeader />
        </div>
      </main>
    </Layout>
  );
};

export default GardenItemPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query GardenItemBySlug($slug: String!) {
    markdownRemark(fields: { nodeType: { eq: "garden" }, slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
        postdate
      }
    }
  }
`;
