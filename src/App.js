import { useReducer, createContext } from 'react';
import Cart from './components/cart/index';
import { data } from './data.js';
import Navbar from './components/navbar/index';
import { reducer } from './reducer.js';
import { createStore } from 'redux';

// css
import './App.css';

export const cartContext = createContext(null);

function App() {
  const initialCartTotal = data.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const default_value = {
    numberOfItemsInCart: 4,
    listOfCartItems: [...data],
    cartTotal: initialCartTotal,
  };

  const [state, dispatch] = useReducer(reducer, default_value);

  return (
    <div>
      <cartContext.Provider value={{ dispatch, state }}>
        <Navbar />
        <Cart />
      </cartContext.Provider>
    </div>
  );
}

export default App;
