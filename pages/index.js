import React from 'react'
import Head from 'next/head';
import {client} from '../lib/client'
import {Product,FooterBanner,HeroBanner} from '../components'

const Home = ({products,bannerData}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          ErphonX. Site E-commerce specialisé technologie haut de Gamme Iphone
        </title>
        <link rel="shortcut icon" type="image/png" href="./icon.webp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="ErphonX. Site E-commerce specialisé technologie haut de Gamme Iphone, Ventes Promotion et exclusivité Iphone Apple Iwatch Earphones"
        />
      </Head>
      <HeroBanner heroBanner={bannerData.length &&
      bannerData[0]} />
      {console.log(bannerData)}
      <main>
        <div className="products-heading">
          <h2>Nos Meilleures Ventes</h2>
          <p>Disponible en plusieurs Versions</p>
        </div>
        <div className="products-container">
          {products?.map((product) => product.name)}
        </div>
      </main>

      <FooterBanner />
    </>
  );
}

export const getServerSideProps = async ()=>{
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return{
    props:{products,bannerData}
  }
}

export default Home
