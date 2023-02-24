import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../components/seo';
import Pagination from '../components/pagination';
import GardenDatesList from '../components/garden-dates';
import { formatDate } from '../utils';

const GardenItem = ({ fields, html }) => {
  const itemDate = formatDate(fields.date);
  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{itemDate} -- {fields.yyyymm}</p>
        </header>
        <div className="card-content">
          <div className="is-family-secondary content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

const GardenList = ({ items }) => (
  <>
    {/* Your post list here. */
      items.map((item) => GardenItem(item.node))
    }
  </>
);

const Garden = ({ pageContext, data }) => (
  <Layout>
    <main>
      <SEO title="Сад переплетених стежок" />
      <div className="columns">
        <div className="column">
          <GardenList
            items={data.allMarkdownRemark.edges}
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
