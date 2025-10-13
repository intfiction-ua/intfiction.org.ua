import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { formatDateM } from '../utils';

const GardenYear = ({ dates, activeClassName }) => dates.map((item) => (
  <li key={item.fieldValue}>
    <Link
      to={`/gardenchapter/${item.fieldValue}/`}
      key={item.fieldValue}
      activeClassName={activeClassName}
    >
      {formatDateM(item.fieldValue)} <span className="tag">{item.totalCount}</span>
    </Link>
  </li>
));

const GardenDatesList = ({ activeClassName }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {nodeType: {eq: "garden"}}}, limit: 2000) {
        group(field: {fields: {yyyymm: SELECT}}) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const dates = data.allMarkdownRemark.group.sort((a, b) => (a.fieldValue < b.fieldValue ? 1 : -1));
  const years = dates.reduce((accumulator, item) => {
    const key = item.fieldValue.substring(0, 4);
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(item);
    return accumulator;
  }, {});
  const yearList = Object.keys(years).sort((a, b) => (a.fieldValue < b.fieldValue ? 1 : -1));

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
        yearList.map((year) => (
          <>
            <li key={year} style={{ padding: '0.75em', backgroundColor: '#EEEEEE' }}>
              <b>{year}</b>
            </li>
            <GardenYear dates={years[year]} activeClassName={activeClassName} />
          </>
        ))
      }
    </ul>
  );
};

export default GardenDatesList;
