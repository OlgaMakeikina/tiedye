import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from "./CartItem";
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="cart-container">
      {cartItems.length > 0 && (
        <div className="cart-item-header">
          <p>Image</p>
          <p>Article</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
      )}
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <h3>TOTAL: $ {totalPrice}</h3>
      <button className="buy-btn">Buy</button>
    </div>
  );
};

export default Cart;
