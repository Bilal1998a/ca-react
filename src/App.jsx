import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import "./styles/global.css"

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Homepage setCart={setCart} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/product/:id" element={<ProductPage setCart={setCart} />} />
        <Route path="/checkout-success-page" element={<CheckoutSuccessPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
