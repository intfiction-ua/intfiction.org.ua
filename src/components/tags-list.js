import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { convert2translit } from '../utils';

const renderTags = (tags, activeClassName) => (
  tags.sort((a, b) => a.fieldValue.localeCompare(b.fieldValue, 'uk-UA'))
    .map((tag) => (
      <li>
        <Link
          to={`/tag/${convert2translit(tag.fieldValue)}`}
          key={tag.fieldValue}
          activeClassName={activeClassName}
        >
          {tag.fieldValue} <span className="tag">{tag.totalCount}</span>
        </Link>
      </li>
    ))
);

const TagsList = ({ activeClassName }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: fields___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <>
      <p className="menu-label">
        Теги
      </p>
      <ul className="menu-list is-size-7">
        {renderTags(data.allMarkdownRemark.group, activeClassName)}
      </ul>
    </>
  );
};

export default TagsList;
