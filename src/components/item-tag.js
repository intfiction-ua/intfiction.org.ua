import React from 'react';
import { Link } from 'gatsby';
import { convert2translit } from '../utils';

const Tag = (name) => (
  <span className="tag" key={name}>
    <Link to={`/tag/${convert2translit(name)}`}>{name}</Link>
  </span>
);

export default Tag;
