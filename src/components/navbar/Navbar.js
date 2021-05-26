import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="list">
                <li className="listItem"><Link to="/">Store</Link></li>
                <li className="listItem"><img src="icons/cart.png" width="20px"/><Link to="/cart">Cart ({props.cartItemsNumber})</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;