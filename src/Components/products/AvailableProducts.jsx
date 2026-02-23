import './Products.css';
import { useContext } from "react";
import CartContext from '../../Context/cart-context';

export default function AvailableProducts({product}){

 const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addToCart(product);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>

      <img
        src={product.imageUrl}
        alt={product.title}
        className="product-img"
      />

      <div className="product-footer">
        <span>$ {product.price}</span>
        <button onClick={addToCartHandler}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}