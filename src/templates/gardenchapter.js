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

const GardenChapter = ({ pageContext, data }) => (
  <Layout>
    <main>
      <SEO title={`Сад переплетених стежок: ${pageContext.yyyymm}`} />
      <div className="columns">
        <div className="column">
          <GardenList
            items={data.allMarkdownRemark.edges}
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
