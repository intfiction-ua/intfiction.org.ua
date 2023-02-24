import React from 'react';
import GardenItem from './garden-item';
import { formatDate } from '../utils';

const GardenList = ({ items, context }) => (
  <>
    <div className="content">
      <h2>Сад переплетених стежок{context.yyyymm && ` : ${formatDate(context.yyyymm)}`}</h2>
    </div>
    {/* Your post list here. */
      items.map((item) => GardenItem(item.node))
    }
  </>
);

export default GardenList;
