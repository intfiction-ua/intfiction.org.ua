import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';

const Seo = ({
  title,
  description = config.siteDescription,
  path = '/',
  image = config.siteLogo,
  children = null,
  canonicalUrl = '',
}) => {
  const seoTitle = title || config.siteTitle;
  const seoType = title ? 'article' : 'website';
  const url = `${config.siteUrl}${path}`;
  return (
    <Helmet title={seoTitle}>
      <html lang={config.siteLanguage} />
      <title>{title ? `${title} | ${config.siteTitle}` : seoTitle}</title>
      <link rel="alternate" type="application/rss+xml" href={config.siteRss} title={config.siteTitle} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} />
      <meta name="keywords" content={config.siteKeywords.join(',')} />
      <meta name="image" content={image} />
      <meta property="og:site_name" content="intfiction.org.ua" />
      <meta property="og:type" content={seoType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content={config.siteLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {children}
    </Helmet>
  );
};

export default Seo;
