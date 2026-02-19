import './CartItems.css';

export default function CartItems({item, onRemove}){
    return(
        <>
        <div key={item.title} className="cart-row">
            <span className="cart-item cart-column">
              <img
                className="cart-img"
                src={item.imageUrl}
                alt={item.title}
              />
              {item.title}
            </span>
            <span className="cart-price cart-column">$ {item.price}</span>
            <span className="cart-quantity cart-column">{item.quantity}
            <button className="remove-btn" onClick={() => onRemove(item.title)}>REMOVE</button>
            </span>
          </div>
        </>
    )
}