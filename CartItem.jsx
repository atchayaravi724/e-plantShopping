import { useSelector } from 'react-redux';

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);

  // TODO: Render each item with its thumbnail, unit price, quantity controls,
  // line total, and delete button. Add cart total and shopping actions.
  return (
    <section className="content-page">
      <h1>Your cart</h1>
      <p>{items.length === 0 ? 'Your cart is empty.' : 'Finish the cart UI.'}</p>
    </section>
  );
}
