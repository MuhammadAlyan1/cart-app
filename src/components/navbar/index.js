import { useContext } from 'react';
import { cartContext } from '../../App';
import { FaShoppingCart } from 'react-icons/fa';

// css
import './index.css';

function Navbar() {
  const {
    state: { numberOfItemsInCart },
  } = useContext(cartContext);

  return (
    <div className="navbar">
      <h1 className="nav-title">Cart</h1>
      <p className="nav-icon">
        <FaShoppingCart />
        <span className="cartItemsAmount">{numberOfItemsInCart}</span>
      </p>
    </div>
  );
}

export default Navbar;
