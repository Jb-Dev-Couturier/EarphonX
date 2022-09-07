import React from 'react'
import Link from 'next/link'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AppleIcon from '@mui/icons-material/Apple';

import {Cart} from './'
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  const {showCart, setShowCart,totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href="/">
          <AppleIcon />
        </Link>
        <Link href="/" className='textNavbar'>

        <span>EarphonX</span>
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <ShoppingCartRoundedIcon/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  );
}

export default NavBar