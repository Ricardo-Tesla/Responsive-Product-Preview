import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageProductDesktop from './image/image-product-desktop.jpg';
import imageProductMobile from './image/image-product-mobile.jpg'; 
import cartIcon from './image/icon-cart.svg';

function App() {
  return (
    <main className="container">
      <div className="custom-container d-flex">
        
          <picture>
            <source media="(max-width: 576px)" srcSet={imageProductMobile} />
            <source media="(min-width: 577px)" srcSet={imageProductDesktop} />
            <img src={imageProductDesktop} className="img-fluid" alt="product" />
          </picture>
      
        <div className="content">
          <p>PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className='price d-flex'>
            <p className='discount'>$149.99</p>
            <p className='original-price'>$169.99</p>
          </div>
          <button>
            <img src={cartIcon} alt="cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
