import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import GardenDatesList from '../components/garden-dates';
import GardenList from '../components/garden-list';

const GardenChapter = ({ pageContext, data }) => (
  <Layout>
    <main>
      <SEO title="Сад переплетених стежок" />
      <div className="columns">
        <div className="column">
          <GardenList
            items={data.allMarkdownRemark.edges}
            context={pageContext}
          />
        </div>
        <div className="column is-3">
          <GardenDatesList context={pageContext} />
        </div>
      </div>
      <br />
    </main>
  </Layout>
);

export default GardenChapter;

export const pageQuery = graphql`
  query ($yyyymm: Date) {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "garden" }, yyyymm: { eq: $yyyymm } } }
      sort: { fields: [fields___date], order: DESC }
    )
    {
      edges {
        node {
          fields {
            slug
            date
            yyyymm
          }
          html
        }
      }
    }
  }
`;
