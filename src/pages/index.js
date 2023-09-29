import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';
import Sidebar from '../components/main-sidebar';
import Banner from '../components/banner';
import LastArticles from '../components/last-articles';
import LastGarden from '../components/last-garden';

const Main = () => (
  <Layout>
    <main>
      <SEO />
      <Banner />
      <div className="columns">
        <div className="column is-3">
          <Sidebar />
        </div>
        <div className="column">
          <LastArticles />
          <LastGarden />
        </div>
      </div>
    </main>
  </Layout>
);

export default Main;
