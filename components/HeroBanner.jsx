import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="image-solo">Petit Text</p>
        <h3>Text Moyen</h3>
        <img src="" alt="Produits-Banniere" className="hero-banner-image" />

        <div>
          <Link href="/product/ID">
            <button type="button">Text Boutton</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, necessitatibus! Voluptas, magni. Eius, commodi
              molestiae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
