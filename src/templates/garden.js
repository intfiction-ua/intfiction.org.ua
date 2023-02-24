import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import Pagination from '../components/pagination';
import GardenDatesList from '../components/garden-dates';
import GardenList from '../components/garden-list';

const Garden = ({ pageContext, data }) => (
  <Layout>
    <main>
      <SEO title="Сад переплетених стежок" />
      <div className="columns">
        <div className="column">
          <GardenList
            items={data.allMarkdownRemark.edges}
            context={pageContext}
          />
          <Pagination context={pageContext} />
        </div>
        <div className="column is-3">
          <GardenDatesList context={pageContext} />
        </div>
      </div>
      <br />
    </main>
  </Layout>
);

export default Garden;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { nodeType: { eq: "garden" } } }
      sort: { fields: [fields___date], order: DESC }
      skip: $skip
      limit: $limit
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
