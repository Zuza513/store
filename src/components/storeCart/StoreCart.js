import './StoreCart.css';

function StoreCart(props) {
    return(
        <div className="card">
            <img src={props.item.photo} className="image"/>
            <div className="textContainer">
                <span className="title">{props.item.title}</span>
                <span className="description">{props.item.describe}</span>
                <div className="addContainer">
                    <span className="price">{props.item.price}$</span>
                    <button className="add" onClick={() => props.addItem(props.item)}><img src="/icons/plus.png" width="30px"/></button>
                </div>
            </div>
        </div>
    )
}

export default StoreCart;