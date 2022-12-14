import React from 'react';
import Head from 'next/head';
import  NavBar  from './NavBar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <meta charSet="utf-8" />
        <title>
          EarphonX. Site E-commerce specialisÃ© technologie haut de Gamme Iphone
        </title>
        <link rel="shortcut icon" type="image/png" href="./icon.webp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="ErphonX. Site E-commerce specialisÃ© technologie haut de Gamme Iphone, Ventes Promotion et exclusivitÃ© Iphone Apple Iwatch Earphones"
        />
      </Head>
      <header>
        <NavBar/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
