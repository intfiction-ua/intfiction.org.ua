import React from 'react';
import { formatDate } from '../utils';

import Category from './item-category';
import Tag from './item-tag';

const ArticleInfo = ({ date, categories, tags, author, isTranslation }) => (
  <div className="level is-family-primary">
    <div className="level-left">
      <div className="level-item">
        {isTranslation ? '' : <>{author}<br /></>}
        {formatDate(date)}
      </div>
    </div>
    <div className="level-right">
      <div className="level-item tags">
        {categories.map(Category)}
        {tags.map(Tag)}
      </div>
    </div>
  </div>
);

export default ArticleInfo;
