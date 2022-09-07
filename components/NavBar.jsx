import React from 'react'
import Link from 'next/link'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AppleIcon from '@mui/icons-material/Apple';


const NavBar = () => {
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
      <button type='button' className='cart-icon' onClick={""}>
        <ShoppingCartRoundedIcon/>
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  );
}

export default NavBar