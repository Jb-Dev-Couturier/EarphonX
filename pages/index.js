import React from 'react'

import {client} from '../lib/client'
import {Product,FooterBanner,HeroBanner} from '../components'

const Home = ({product,bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
        <div className="products-heading">
          <h2>Nos Meilleures Ventes</h2>
          <p>Disponible en plusieurs Versions</p>
        </div>
        <div className="products-container">
          {product?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
}

export const getServerSideProps = async ()=>{
  const query = '*[_type == "product"]'
  const product = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return{
    props:{product,bannerData}
  }
}

export default Home
