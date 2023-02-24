import React from 'react';
import { formatDate } from '../utils';

const GardenItem = ({ fields, html }) => {
  const itemDate = formatDate(fields.date);
  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{itemDate}</p>
        </header>
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
