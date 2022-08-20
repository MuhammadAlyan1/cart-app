function decrementAmount({
  id,
  price,
  cartItemAmount,
  setCartItemAmount,
  dispatch,
}) {
  if (cartItemAmount === 1) {
    setCartItemAmount(cartItemAmount - 1);
    dispatch({ type: 'REMOVE_ITEM', payload: { id, cartItemAmount } });
    return;
  }

  dispatch({ type: 'DECREMENT_ITEM', payload: price });
  setCartItemAmount(cartItemAmount - 1);
}

export default decrementAmount;
