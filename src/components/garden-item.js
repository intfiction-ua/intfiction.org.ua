import React from 'react';
import { Link } from 'gatsby';
import { formatDate } from '../utils';

const GardenItem = ({ fields, html, hideHeader }) => {
  const itemDate = formatDate(fields.postdate);
  let header;
  if (!hideHeader) {
    header = (
      <header className="card-header">
        <Link to={fields.slug} className="hoverable_link">
          <p className="card-header-title">
            {itemDate}
          </p>
        </Link>
      </header>
    );
  }

  return (
    <>
      <div className="card">
        {header}
        <div className="card-content">
          <div className="is-family-secondary content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default GardenItem;
