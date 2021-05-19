import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="list">
                <li className="listItem"><a href="#">Store</a></li>
                <li className="listItem"><img src="icons/cart.png" width="20px"/><a href="#">Cart (0)</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;