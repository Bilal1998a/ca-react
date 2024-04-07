import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductPage({ setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProduct(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = () => {
    setCart(prevCart => [
      ...prevCart,
      { 
        id: product.id, 
        title: product.title, 
        quantity, 
        price: product.discountedPrice || product.price,
        // Check if product.image exists before accessing its properties
        image: product.image ? { url: product.image.url, alt: product.image.alt } : null
      }
    ]);
  };

  const handleQuantityChange = (change) => {
    if (quantity + change > 0) {
      setQuantity(quantity + change);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '600px',
        padding: '20px'
      }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            {}
            {product.image && <img src={product.image.url} alt={product.image.alt} style={{ width: '100%', height: 'auto' }} />}
          </div>
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.discountedPrice || product.price}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <button onClick={() => handleQuantityChange(-1)} style={{ padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>-</button>
              <input type="number" value={quantity} readOnly style={{ width: '50px', textAlign: 'center', margin: '0 10px' }} />
              <button onClick={() => handleQuantityChange(1)} style={{ padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>+</button>
            </div>
            <button onClick={handleAddToCart} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Add to Cart</button>
            {}
            <div style={{ marginTop: '10px' }}>
              <Link to="/cart" style={{ textDecoration: 'none', color: '#007bff' }}>Go to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
