import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2022 EarphonX | Tout droits reservés
        <CopyrightIcon className="copy-icon" />|{' '}
      </p>
      <p className="icons">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </p>
    </div>
  );
}

export default Footer