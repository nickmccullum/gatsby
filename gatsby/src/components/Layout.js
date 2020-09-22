import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <Nav />
      <p>I am the page content</p>
      <Footer />
    </div>
  );
}
