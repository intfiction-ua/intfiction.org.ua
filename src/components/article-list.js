import React from 'react';
import { Link } from 'gatsby';

import ArticleInfo from './article-info';

/*
path: postEdge.node.fields.slug,
tags: postEdge.node.frontmatter.tags,
categories: postEdge.node.frontmatter.categories,
cover: postEdge.node.frontmatter.cover,
title: postEdge.node.frontmatter.title,
date: postEdge.node.frontmatter.date,
excerpt: postEdge.node.excerpt,
*/

const ArticleListItem = ({ fields, frontmatter, excerpt }) => (
  <div className="block content" key={frontmatter.title}>
    <div className="is-family-secondary mx-4">
      <Link to={fields.slug} className="hoverable_link">
        <h2 className="title">{frontmatter.title}</h2>
      </Link>
      <ArticleInfo
        date={frontmatter.date}
        categories={fields.categories}
        tags={fields.tags}
      />
      <p>
        {excerpt}
        &nbsp;
        <Link to={fields.slug} className="button is-light is-small">
          &gt;&gt;&gt;
        </Link>
      </p>
    </div>
    <hr />
  </div>
);

const ArticleList = ({ articles }) => (
  <>
    {/* Your post list here. */
      articles.map((item) => ArticleListItem(item.node))
    }
  </>
);

export default ArticleList;
