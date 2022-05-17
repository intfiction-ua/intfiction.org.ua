import React from 'react';

import ArticleList from './article-list';
import Pagination from './pagination';
import CategoriesList from './categories-list';
import TagsList from './tags-list';

const ArticleBrowser = ({ data, context }) => (
  <div className="columns">
    <div className="column">
      <ArticleList articles={data} />
      <Pagination context={context} />
    </div>
    <div className="column is-3">
      <CategoriesList context={context} />
      <TagsList context={context} />
    </div>
  </div>
);

export default ArticleBrowser;
