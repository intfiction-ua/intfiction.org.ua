import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GardenItem from './garden-item';

const LastGarden = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { nodeType: { eq: "garden" } } }
        sort: { fields: [fields___postdate], order: DESC }
        limit: 5
      )
      {
        edges {
          node {
            fields {
              slug
              postdate
              yyyymm
            }
            html
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.edges.map(
        (item) => (
          <GardenItem
            fields={item.node.fields}
            html={item.node.html}
            key={item.node.fields.slug}
          />
        ),
      )}
    </>
  );
};

export default LastGarden;
