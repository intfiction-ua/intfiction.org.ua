import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import './layout.scss';

const MainLayout = ({ children }) => (
  <div className="container is-max-desktop">
    <Header />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
