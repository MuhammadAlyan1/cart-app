import { useState } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';
import { useContext } from 'react';
import { cartContext } from '../../App';
import incrementAmount from './utils/incrementAmount';
import decrementAmount from './utils/decrementAmount';
import removeItem from './utils/removeItem';

// css
import './index.css';

function CartItem({ id, title, price, img }) {
  const { dispatch } = useContext(cartContext);

  const [cartItemAmount, setCartItemAmount] = useState(1);

  return (
    <article className="cartItem">
      <div className="image-content-div">
        <div className="image-div">
          <img src={img} alt={title} />
        </div>
        <div className="content-div">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
          <button
            className="remove"
            onClick={() => removeItem({ id, cartItemAmount, dispatch })}
          >
            remove
          </button>
        </div>
      </div>
      <div className="increment-decrement-div">
        <button
          onClick={() =>
            incrementAmount({
              price,
              cartItemAmount,
              setCartItemAmount,
              dispatch,
            })
          }
          className="increment"
        >
          <BiUpArrowAlt />
        </button>
        <p className="cartItemAmount">{cartItemAmount}</p>
        <button
          onClick={() =>
            decrementAmount({
              id,
              price,
              cartItemAmount,
              setCartItemAmount,
              dispatch,
            })
          }
          className="decrement"
        >
          <BiDownArrowAlt />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
