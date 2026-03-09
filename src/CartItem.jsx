import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from './CartSlice';

function CartItem({ onContinue, onHome }) {
  const dispatch = useDispatch();
  const items      = useSelector(state => state.cart.items);
  const totalQty   = useSelector(state => state.cart.totalQuantity);
  const totalCost  = useSelector(state => state.cart.totalCost);
  const [checkedOut, setCheckedOut] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <div className="navbar-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onHome(); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onContinue(); }}>Plants</a>
          <span className="cart-icon-wrap">
            🛒
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </span>
        </div>
      </nav>

      <div className="cart-page">
        <h2>🛒 Your Shopping Cart</h2>

        {/* Total cart amount */}
        <p style={{ marginBottom: '20px', color: '#555', fontSize: '1rem' }}>
          Total items in cart: <strong>{totalQty}</strong>
        </p>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. 🌱</p>
            <br />
            <button className="continue-btn" onClick={onContinue}>Browse Plants</button>
          </div>
        ) : (
          <>
            {items.map(item => (
              <div key={item.id} className="cart-item-row">
                {/* Thumbnail */}
                <img src={item.image} alt={item.name} />

                {/* Info */}
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity controls */}
                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span className="qty-num">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>

                {/* Total for this item */}
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Delete button */}
                <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>
                  🗑 Delete
                </button>
              </div>
            ))}

            {/* Summary */}
            <div className="cart-summary">
              <div className="cart-total-text">
                Total Cost: <span style={{ color: '#40916c' }}>${totalCost.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button className="continue-btn" onClick={onContinue}>
                  ← Continue Shopping
                </button>
                <button
                  className="checkout-btn"
                  onClick={() => setCheckedOut(true)}
                >
                  Checkout
                </button>
              </div>
            </div>

            {/* Coming Soon message */}
            {checkedOut && (
              <div style={{
                marginTop: '24px',
                background: '#d8f3dc',
                border: '2px solid #52b788',
                borderRadius: '12px',
                padding: '20px 28px',
                textAlign: 'center',
                color: '#1b4332',
                fontSize: '1.15rem',
                fontWeight: '600'
              }}>
                🚀 Coming Soon! Our checkout is under construction. Thank you for shopping at Paradise Nursery!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;