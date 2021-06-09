import './Cart.css';

function Cart(props) {
    const cards = props.items.map((item, idx) => (
        <div className="cartCard">
            <img src={item.photo} alt="item Photo" width="70px" />
            <div className="textContainer">
                <span className="cartTitle">{item.title}</span>
                <span className="cartPrice">{item.price}</span>
            </div>
            <span className="cartQty">Qty: {item.quantity}</span>
            <div className="buttonsContainer">
                <button type="button" className="cartButton"><img src="/icons/plus.png" width="30" onClick={() => props.addItem(item)}/></button>
                <button type="button" className="cartButton"><img src="/icons/minus.png" width="30" onClick={() => props.removeItem(item)} /></button>
                <button type="button" className="cartButton"><img src="/icons/remove.png" width="30" onClick={() => props.removeAll(item, item.quantity)}/></button>
            </div>
        </div>
    ))

    let totalPrice = 0;
    props.items.forEach(item => totalPrice += item.price * item.quantity);

    return (
        <div className="cartContainer">
            <div className="cartCardsContainer">
                {cards}
            </div>
            <div className="checkoutContainer">
                <span className="checkoutTitle">Total Items</span>
                <span className="checkoutValue">{props.totalItems}</span>
                <span className="checkoutTitle">Total Price</span>
                <span className="checkoutValue">{totalPrice}</span>
                <button className="cartButton checkoutButtonPrimary">Checkout</button>
                <button className="cartButton checkoutButtonSecondary" onClick={() => props.clearCart()}>Clear</button>

            </div>
        </div>
    )
}

export default Cart;