import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [page, setPage] = useState('landing'); // 'landing' | 'products' | 'cart'

  if (page === 'products') return <ProductList onCart={() => setPage('cart')} onHome={() => setPage('landing')} />;
  if (page === 'cart') return <CartItem onContinue={() => setPage('products')} onHome={() => setPage('landing')} />;

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Bring life, colour, and calm into your home with our hand-picked
          collection of beautiful houseplants. Free delivery on orders over $50.
        </p>
        <button className="get-started-btn" onClick={() => setPage('products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;