import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { convert2translit } from '../utils';

const renderCategories = (categories, activeClassName) => (
  categories.sort((a, b) => a.fieldValue.localeCompare(b.fieldValue, 'uk-UA'))
    .map((category) => (
      <li key={category.fieldValue}>
        <Link
          to={`/category/${convert2translit(category.fieldValue)}/`}
          activeClassName={activeClassName}
        >
          {category.fieldValue} <span className="tag">{category.totalCount}</span>
        </Link>
      </li>
    ))
);

const CategoriesList = ({ activeClassName }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: {fields: {categories: SELECT}}) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <>
      <p className="menu-label">
        Категорії
      </p>
      <ul className="menu-list is-size-7">
        {renderCategories(data.allMarkdownRemark.group, activeClassName)}
      </ul>
    </>
  );
};

export default CategoriesList;
