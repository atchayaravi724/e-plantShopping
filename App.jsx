import { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setPage('home')}>
          Paradise Nursery
        </a>
        <nav aria-label="Main navigation">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('products')}>Plants</button>
          <button onClick={() => setPage('cart')}>Cart</button>
          <button onClick={() => setPage('about')}>About</button>
        </nav>
      </header>

      <main>
        {page === 'home' && (
          <section className="hero">
            <p className="eyebrow">A little more green, every day</p>
            <h1>Bring nature home</h1>
            <p>Choose a plant and learn how to care for it.</p>
            <button className="primary" onClick={() => setPage('products')}>
              Get Started
            </button>
          </section>
        )}
        {page === 'products' && <ProductList />}
        {page === 'cart' && <CartItem />}
        {page === 'about' && <AboutUs />}
      </main>
    </>
  );
}
