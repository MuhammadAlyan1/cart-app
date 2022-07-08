import { useReducer, createContext } from "react";
import { CartElements } from "./CartElements";
import { data } from "./data.js";
import { Navbar } from "./Navbar";
import { reducer } from "./reducer.js";

// css
import "./App.css";

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
        <CartElements />
      </cartContext.Provider>
    </div>
  );
}

export default App;
