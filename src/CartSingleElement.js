import { useState, useEffect } from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

import { useContext } from "react";
import { cartContext } from "./App";

// css
import "./CartSingleElement.css";

export function CartSingleElement({ id, title, price, img }) {
  const { dispatch } = useContext(cartContext);

  const [cartItemAmount, setCartItemAmount] = useState(1);

  function incrementBtnClick(price) {
    setCartItemAmount(cartItemAmount + 1);
    dispatch({ type: "INCREMENT_ITEM", payload: price });
  }

  function decrementBtnClick(id, price, cartItemAmount) {
    if (cartItemAmount === 1) {
      console.log(" I AM DECREMENT BOI");
      setCartItemAmount(cartItemAmount - 1);
      dispatch({ type: "REMOVE_ITEM", payload: { id, cartItemAmount } });
      return;
    }

    dispatch({ type: "DECREMENT_ITEM", payload: price });
    setCartItemAmount(cartItemAmount - 1);
  }

  function removeBtnClick(id) {
    dispatch({ type: "REMOVE_ITEM", payload: { id, cartItemAmount } });
  }

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
            onClick={() => removeBtnClick(id, cartItemAmount)}
          >
            remove
          </button>
        </div>
      </div>
      <div className="increment-decrement-div">
        <button onClick={() => incrementBtnClick(price)} className="increment">
          <BiUpArrowAlt />
        </button>
        <p className="cartItemAmount">{cartItemAmount}</p>
        <button
          onClick={() => decrementBtnClick(id, price, cartItemAmount)}
          className="decrement"
        >
          <BiDownArrowAlt />
        </button>
      </div>
    </article>
  );
}
