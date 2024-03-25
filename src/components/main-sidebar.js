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
      <Link to="/page/what-is-interactive-literature/" className="subtitle is-fullwidth">Що таке ІЛ</Link>
    </SidebarTile>
    <SidebarTile icon="/images/bookshelf.png">
      <Link to="/page/selected-works/" className="subtitle is-fullwidth">Обрані твори</Link>
    </SidebarTile>
    <SidebarTile icon="/images/maze.png">
      <Link to="/garden/" className="subtitle">Новини</Link>
    </SidebarTile>
    <SidebarTile icon="/images/papers.png">
      <Link to="/articles/" className="subtitle">Статті</Link>
    </SidebarTile>
    <SidebarTile icon="/images/book-pile.png">
      <Link to="/page/library/" className="subtitle">Бібліотека</Link>
    </SidebarTile>
    <SidebarTile icon="/images/toolbox.png">
      <Link to="/page/toolbox/" className="subtitle">Майстерня</Link>
    </SidebarTile>
    <SidebarTile icon="/images/friends.png">
      <Link to="/page/communities/" className="subtitle">Інші спільноти</Link>
    </SidebarTile>
    <SidebarTile icon="/images/discord-logo-black.png">
      <a href="https://discord.gg/dWdySHUJKV" className="subtitle">Чат в Discord</a>
    </SidebarTile>
  </div>
);

export default Sidebar;
