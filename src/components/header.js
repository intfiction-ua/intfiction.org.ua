import React from 'react';
import { Link } from 'gatsby';
import config from '../config';

const Header = () => (
  <nav className="navbar is-primary block">
    <div className="navbar-brand">
      <div className="navbar-item">
        <img id="intfiction-logo" src="/logo/ifiction-ua-128.png" alt="ІЛ" />
      </div>
      <Link className="intfiction-navbar-title navbar-item" to="/">
        {config.siteTitle}
      </Link>
    </div>
  </nav>
);

export default Header;
