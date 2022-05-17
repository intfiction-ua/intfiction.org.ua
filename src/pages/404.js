import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';
import Sidebar from '../components/main-sidebar';

const Page404 = () => (
  <Layout>
    <main>
      <SEO />
      <div className="columns">
        <div className="column is-3">
          <Sidebar />
        </div>
        <div className="column has-text-centered">
          <h1 className="title">Такої сторінки не знайдено</h1>
          <h2 className="subtitle">Скоріше за все, її ніколи не існувало.</h2>
        </div>
      </div>
    </main>
  </Layout>
);

export default Page404;
