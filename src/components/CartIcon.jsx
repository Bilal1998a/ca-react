import React from 'react';
import { Link } from 'react-router-dom';

function CartIcon({ itemCount }) {
  return (
    <Link to="/cart" style={{ position: 'relative' }}>
      <i className="fas fa-shopping-cart"></i>
      {itemCount > 0 && (
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {itemCount}
        </div>
      )}
    </Link>
  );
}

export default CartIcon;
