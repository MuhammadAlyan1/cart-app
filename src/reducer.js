export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'REMOVE_ITEM':
      let removedItemPrice = 0;
      return {
        ...state,
        listOfCartItems: [
          ...state.listOfCartItems.filter((item) => {
            if (item.id === payload.id) {
              removedItemPrice = item.price;
              return;
            }

            return item;
          }),
        ],
        cartTotal: state.cartTotal - removedItemPrice * payload.cartItemAmount,
        numberOfItemsInCart: state.numberOfItemsInCart - payload.cartItemAmount,
      };

    case 'DECREMENT_ITEM':
      return {
        ...state,
        numberOfItemsInCart: state.numberOfItemsInCart - 1,
        cartTotal: state.cartTotal - payload,
      };

    case 'INCREMENT_ITEM':
      return {
        ...state,
        numberOfItemsInCart: state.numberOfItemsInCart + 1,
        cartTotal: state.cartTotal + payload,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        numberOfItemsInCart: 0,
        listOfCartItems: [],
        cartTotal: 0,
      };

    default:
      return state;
  }
}
