import './Cart.css';
import CartItems from './CartItems';
import { useContext } from "react";
import CartContext from '../../Context/cart-context';

export default function Cart(props){

   const cartCtx = useContext(CartContext);
    
   const totalAmount = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

    return(
        <>
        <section className='container'>
            <button onClick={props.onClose} className='cancel'>Close</button>
            <h2>CART</h2>
            <div className='cart-header'>
                <span className='cart-item cart-column'>Item</span>
                <span className='cart-price cart-column'>Price</span>
                <span className='cart-quantity cart-column'>Quantity</span>
            </div>

            {cartCtx.items.length === 0 && (
              <p className="empty">Your cart is empty</p>
            )}
              {cartCtx.items.map((item) => (
                <CartItems
                  key={item.title}
                  item={item}
                  onRemove={cartCtx.removeFromCart}
                />
            ))}

            <div className='cart-total'>
                <span>
                    <span className='cart-title'>
                        <strong>Total</strong>
                    </span>
                    <span>$
                        <span>{totalAmount}</span>
                    </span>
                </span>
            </div>
            <button className='purchase-btn'>PURCHASE</button>
        </section>
        </>
    )
}