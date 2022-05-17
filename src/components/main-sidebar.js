import React from 'react';
import { Link } from 'gatsby';

const SidebarTile = ({
  children,
  type = 'is-warning',
  icon = '',
}) => (
  <div className={`intfiction-sidebar-tile notification ${type}`}>
    <article className="media">
      <figure className="image is-32x32 media-left">
        <img src={icon} alt="" />
      </figure>
      <div className="media-content">
        {children}
      </div>
    </article>
  </div>
);

const Sidebar = () => (
  <div className="intfiction-sidebar">
    <SidebarTile icon="/images/white-book.png">
      <Link to="/page/what-is-interactive-literature" className="subtitle is-fullwidth">Що таке ІЛ</Link>
    </SidebarTile>
    <SidebarTile icon="/images/papers.png">
      <Link to="/articles" className="subtitle">Статті</Link>
    </SidebarTile>
    <SidebarTile icon="/images/book-pile.png">
      <Link to="/page/library" className="subtitle">Бібліотека</Link>
    </SidebarTile>
    <SidebarTile icon="/images/toolbox.png">
      <Link to="/page/toolbox" className="subtitle">Майстерня</Link>
    </SidebarTile>
    <SidebarTile icon="/images/discord-logo-black.png">
      <a href="https://discord.gg/dWdySHUJKV" className="subtitle">Наш Discord-сервер</a>
    </SidebarTile>
  </div>
);

export default Sidebar;
