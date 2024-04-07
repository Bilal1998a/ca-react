import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cart, clearCart }) {
  const subtotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ width: '80%', maxWidth: '600px' }}>
        <h2>Cart</h2>
        {cart.map(product => (
          <div key={product.id} style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              {}
              {product.image && product.image.url && <img src={product.image.url} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />} 
            </div>
            <div>
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
        <div style={{ marginTop: '20px' }}>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          {}
         {/*  <Link to="/checkout-success-page" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none' }} onClick={handleCheckout}>Checkout</Link> */}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
