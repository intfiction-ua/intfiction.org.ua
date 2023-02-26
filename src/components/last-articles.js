import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { formatDate } from '../utils';
/*
const ArticleLink = ({ item }) => (
  <>
  
    <span className="tag" style={{width: '120px', 'justify-content': 'left'}}>{formatDate(item.frontmatter.date)}</span>
    <Link to={item.fields.slug}>{item.frontmatter.title}</Link>
  </>
);
*/

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
        filter: { fields: { nodeType: { eq: "article" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      )
      {
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
  console.log(data);

  return (
    <div className="message is-secondary">
      <div className="message-body">
        {data.allMarkdownRemark.edges.map(
          (item) => (<ArticleLink item={item.node} key={item.node.fields.slug} />),
        )}
      </div>
    </div>
  );
};

export default LastArticles;
