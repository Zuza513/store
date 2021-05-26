import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar'
import Store from './components/store/Store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartItemsNumber: 0
    }

    this.addItemToCart = this.addItemToCart.bind(this);
    this.ifItemExists = this.ifItemExists.bind(this);
  }

  addItemToCart(item) {
    const number = this.state.cartItemsNumber + 1;
    // const cart = this.state.cart.concat(item);
    let cart;
    if (this.ifItemExists(item)) {
      cart = this.state.cart.map(cartItem => {
        if (cartItem.title === item.title) {
          cartItem.quantity += 1;
          return cartItem;
        }
        return cartItem;
      })
    } else {
      item.quantity = 1;
      cart = this.state.cart.concat(item);
    }

    this.setState({
      cart: cart,
      cartItemsNumber: number
    })
  }

  ifItemExists(item) {
    return this.state.cart.some(cartItem => cartItem.title === item.title);
  }

  render() {
    console.log('state: ', this.state);
    return (
      <Router>
        <div className="App">
          <Navbar cartItemsNumber={this.state.cartItemsNumber}></Navbar>
          <Switch>
            <Route path="/cart">
              <p>Cart</p>
            </Route>
            <Route path="/">
              <Store addItem={this.addItemToCart}></Store>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
