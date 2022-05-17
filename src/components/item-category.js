import React from 'react';
import { Link } from 'gatsby';
import { convert2translit } from '../utils';

const Category = (name) => (
  <span className="tag is-primary is-light" key={name}>
    <Link to={`/category/${convert2translit(name)}`}>{name}</Link>
  </span>
);

export default Category;
