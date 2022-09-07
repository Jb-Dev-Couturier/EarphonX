import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <CreditScoreRoundedIcon />
        </p>
        <h2>Merci pour votre Commande!</h2>
        <p className="email-msg">Verifiez votre mail pour obtenir votre reçu</p>
        <p className="description">
          Si vous avez la moindre question, ecrivez nous
          <a className="email" href="mailto:EarphoneX@gmail.com">
            EarphoneX@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuer Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
