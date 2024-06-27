import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { formatDate } from '../utils';

const ArticleLink = ({ item }) => (
  <div className="columns">
    <div className="column is-2">
      <span className="tag">{formatDate(item.frontmatter.date)}</span>
    </div>
    <div className="column is-10">
      <Link to={item.fields.slug}>{item.frontmatter.title}</Link>
    </div>
  </div>
);

const LastArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {fields: {nodeType: {eq: "article"}}}
        sort: {frontmatter: {date: DESC}}
        limit: 5
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  return (
    <div className="message">
      <div className="message-body">
        {data.allMarkdownRemark.edges.map(
          (item) => (<ArticleLink item={item.node} key={item.node.fields.slug} />),
        )}
      </div>
    </div>
  );
};

export default LastArticles;
