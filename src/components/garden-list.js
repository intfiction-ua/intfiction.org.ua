import React from 'react';
import { Link } from 'gatsby';
import GardenItem from './garden-item';
import { formatDateM } from '../utils';

const GardenList = ({ items, context }) => (
  <>
    <div className="block content mx-4">
      <Link to="/garden/" className="hoverable_link">
        <h2 className="title">
          Сад переплетених стежок{context.yyyymm && `, ${formatDateM(context.yyyymm)}`}
        </h2>
      </Link>
    </div>
    {/* Your post list here. */
      items.map(
        (item) => (
          <GardenItem
            fields={item.node.fields}
            html={item.node.html}
            key={item.node.fields.slug}
          />
        ),
      )
    }
  </>
);

export default GardenList;
