import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ context }) => (
  <nav className="pagination is-centered" role="navigation" aria-label="pagination">
    <Link className="pagination-previous" to={context.previousPagePath}>&lt;</Link>
    <ul className="pagination-list">
      <li>
        {context.humanPageNumber}
        /
        {context.numberOfPages}
      </li>
    </ul>
    <Link className="pagination-next" to={context.nextPagePath}>&gt;</Link>
  </nav>
);

export default Pagination;
