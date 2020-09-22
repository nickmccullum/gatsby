import React from 'react';
import Nav from '../components/Nav.js';
import Layout from '../components/Layout.js';

export default function HomePage() {
  return (
    <Layout>
      <Nav />
      <p>Hey! I'm the home page</p>
    </Layout>
  );
}
