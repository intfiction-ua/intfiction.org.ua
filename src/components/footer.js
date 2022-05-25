import React from 'react';
import { Link } from 'gatsby';
import config from '../config';

const Footer = () => (
  <footer className="notification is-primary">
    <nav className="breadcrumb has-dot-separator is-small">
      <ul>
        <li><Link to={config.siteRss}>RSS</Link></li>
        <li><Link to={config.siteMap}>Sitemap</Link></li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
