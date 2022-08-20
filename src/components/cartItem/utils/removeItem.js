function removeItem({ id, cartItemAmount, dispatch }) {
  dispatch({ type: 'REMOVE_ITEM', payload: { id, cartItemAmount } });
}

export default removeItem;
