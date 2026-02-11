import './Cart.css';

export default function Cart(){
    
    return(
        <>
        <section className='container'>
            <h2>CART</h2>
            <button className='cancel'>X</button>
            <div className='cart-header'>
                <span className='cart-item cart-column'>Item</span>
                <span className='cart-price cart-column'>Price</span>
                <span className='cart-quantity cart-column'>Quantity</span>
            </div>
            <div className='cart-total'>
                <span>
                    <span className='cart-title'>
                        <strong>Total</strong>
                    </span>
                    <span>$
                        <span>6.99</span>
                    </span>
                </span>
            </div>
            <button className='purchase-btn'>PURCHASE</button>
        </section>
        </>
    )
}