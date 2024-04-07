import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutSuccessPage({ clearCart }) {
  return (
    <div>
      <h2>Order Successful</h2>
      <p>Your order has been successfully placed!</p>
      <Link to="/" onClick={clearCart}>Back to Store</Link>
    </div>
  );
}

export default CheckoutSuccessPage;
