import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { formatDateM } from '../utils';

const renderGardenDates = (dates, activeClassName) => (
  dates.sort().map((item) => (
    <li>
      <Link
        to={`/gardenchapter/${item.fieldValue}/`}
        key={item.fieldValue}
        activeClassName={activeClassName}
      >
        {formatDateM(item.fieldValue)} <span className="tag">{item.totalCount}</span>
      </Link>
    </li>
  ))
);

const GardenDatesList = ({ activeClassName }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: fields___yyyymm) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <ul className="menu-list is-size-6">
      {renderGardenDates(data.allMarkdownRemark.group, activeClassName)}
    </ul>
  );
};

export default GardenDatesList;
