import './NavBar.css';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from '../../Context/cart-context';

export default function NavBar(props){

    const cartCtx = useContext(CartContext);

    const totalQuantity = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
    return(
        <>
            <header className='main-header'>
                <ul className="nav-links">
                    <li>
                        <NavLink  to="/home" className={({ isActive }) => isActive ? "active" : ""}>
                         HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}>
                         STORE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                         ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                         Contact US
                        </NavLink>
                    </li>
                    <button className="cart-holder" onClick={props.onShowCart}>🛒 Cart ({totalQuantity}) </button>
                </ul>
                <h1>The Generics</h1>
            </header>
        </>
    )
}




