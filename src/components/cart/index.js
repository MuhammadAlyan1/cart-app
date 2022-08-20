import { useContext } from 'react';
import { cartContext } from '../../App';
import CartItem from '../cartItem/index';

// css
import './index.css';

export function Cart() {
  const {
    state: { listOfCartItems, cartTotal },
    dispatch,
  } = useContext(cartContext);

  function clearCart() {
    dispatch({ type: 'CLEAR_CART' });
  }

  return (
    <div className="cart-container">
      <h1 className="cart-heading">your bag</h1>
      <div className="cart-item-container">
        {listOfCartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <div className="total-container">
        <p className="total-title">Total</p>
        <p className="total-amount">${cartTotal}</p>
      </div>

      <button onClick={clearCart} className="clearBtn">
        clear cart
      </button>
    </div>
  );
}

export default Cart;
