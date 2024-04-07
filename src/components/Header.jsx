import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart }) {
  return (
    <nav style={styles.navbar}>
      <div className="container" style={styles.container}>
        <div className="d-flex align-items-center">
          <Link className="navbar-brand mr-4" to="/" style={styles.brand}>Your App Name</Link>
          <div className="d-flex align-items-center mr-auto">
            <Link className="nav-link mr-3" to="/" style={styles.link}>Home</Link>
            <Link className="nav-link mr-3" to="/contact" style={styles.link}>Contact</Link>
          </div>
          {/* Updated Cart Link */}
          <Link className="nav-link" to="/cart" style={styles.cartLink}>
            <i className="fas fa-shopping-cart" style={styles.cartIcon}></i> Cart {cart.length > 0 && <span>({cart.length})</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#343a40',
    padding: '10px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  brand: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    marginRight: '15px',
  },
  cartLink: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
  },
  cartIcon: {
    marginRight: '5px',
  },
};

export default Header;
