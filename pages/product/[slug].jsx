import React,{useState}from 'react';

import { client, urlFor } from '../../lib/client';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

import { Product } from '../../components';
import {useStateContext}from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0) 
  const {decQty, incQty,qty,onAdd} = useStateContext()
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              alt={name}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                alt={name}
                key={i}
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <StarOutlinedIcon />
              <StarOutlinedIcon />
              <StarOutlinedIcon />
              <StarOutlineOutlinedIcon />
              <StarOutlineOutlinedIcon />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details</h4>
          <p>{details}</p>
          <p className="price">{price}€</p>
          <div className="quantity">
            <h3>Quantité :</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <RemoveCircleOutlineOutlinedIcon />
              </span>
              <span className="num">
                {qty}
              </span>
              <span className="plus" onClick={incQty}>
                <ControlPointOutlinedIcon />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=>onAdd(product,qty)}>
              Ajout Panier
            </button>
            <button type="button" className="buy-now" onClick="">
              Achat Immédiat
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>Vous aimerez aussi</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
