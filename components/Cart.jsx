import React, { useRef } from 'react';
import Link from 'next/link';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <ArrowCircleLeftOutlinedIcon />
          <span className="heading">Votre Panier à</span>
          <span className="cart-num-items">{totalQuantities} article(s)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <LocalMallIcon className="cart-icons" />
            <h3>Votre Panier est Vide</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continuer Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  alt={item.name}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price} €</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={""}>
                          <RemoveCircleOutlineOutlinedIcon />
                        </span>
                        <span className="num">0</span>
                        <span className="plus" onClick={""}>
                          <ControlPointOutlinedIcon />
                        </span>
                      </p>

                    </div>
                    <button
                    type='button'
                    className='remove-item'
                    onClick={""}
                    >
                      <DeleteOutlinedIcon/>
                    </button>
                  </div>
                </div>
              </div>
            ))}

        </div>
        {cartItems.length>=1 &&(
          <div className="cart-bottom">
            <div className="total">
              <h3>Sous Total</h3>
              <h3>{totalPrice}€</h3>
            </div>
            <div className="btn-container">
              <button type='button' className='btn' onClick={''}>Paiement avec Stripe <CreditCardIcon className='credit-icon'/></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
