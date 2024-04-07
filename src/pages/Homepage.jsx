import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hook/useProducts';

function Homepage({ setCart }) {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => [
      ...prevCart,
      {
        id: product.id,
        title: product.title,
        price: product.discountedPrice || product.price,
        quantity: 1,
        image: product.image 
      }
    ]);
  };
  
  return (
    <div>
      <h2>Search:</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div style={styles.productGrid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image.url} alt={product.image.alt} style={styles.productImage} />
            <div style={styles.productInfo}>
              <h2 style={styles.productTitle}>{product.title}</h2>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>Now: {product.discountedPrice}</p>
              <p style={styles.productPrice}>Was: {product.price}</p>
            </div>
            <div style={styles.buttonContainer}>
              <Link to={`/product/${product.id}`}>
                <button style={styles.button}>View</button>
              </Link>
              <button onClick={() => handleAddToCart(product)} style={styles.button}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
  productInfo: {
    flexGrow: '1',
  },
  productTitle: {
    fontSize: '1.2rem',
    marginBottom: '5px',
  },
  productDescription: {
    marginBottom: '5px',
  },
  productPrice: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
  },
};

export default Homepage;
