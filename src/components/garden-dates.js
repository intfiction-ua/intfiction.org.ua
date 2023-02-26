import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { formatDateM } from '../utils';

const GardenDatesList = ({ activeClassName }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { nodeType: { eq: "garden" } } }
        limit: 2000
      ) {
        group(field: fields___yyyymm) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const dates = data.allMarkdownRemark.group.sort((a, b) => (a.fieldValue < b.fieldValue ? 1 : -1));

  return (
    <ul className="menu-list is-size-6">
      <li>
        <Link
          to="/garden"
          activeClassName={activeClassName}
        >
          Всі пости
        </Link>
      </li>
      {
        dates.map((item) => (
          <li key={item.fieldValue}>
            <Link
              to={`/gardenchapter/${item.fieldValue}/`}
              key={item.fieldValue}
              activeClassName={activeClassName}
            >
              {formatDateM(item.fieldValue)} <span className="tag">{item.totalCount}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default GardenDatesList;
