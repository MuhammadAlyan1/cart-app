function incrementAmount({
  price,
  cartItemAmount,
  setCartItemAmount,
  dispatch,
}) {
  setCartItemAmount(cartItemAmount + 1);
  dispatch({ type: 'INCREMENT_ITEM', payload: price });
}

export default incrementAmount;
