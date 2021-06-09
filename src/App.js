import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar'
import Store from './components/store/Store';
import Cart from './components/cart/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartItemsNumber: 0
    }

    this.addItemToCart = this.addItemToCart.bind(this);
    this.ifItemExists = this.ifItemExists.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.removeItemFromCart
     = this.removeItemFromCart.bind(this);
     this.removeAllOfType = this.removeAllOfType.bind(this);
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

  clearCart() {
    this.setState({
      cart: [],
      cartItemsNumber: 0
    })
  }

  removeItemFromCart(item) {
    const number = this.state.cartItemsNumber -1;
    let itemToRemove;

    let cart = this.state.cart.map(cartItem => {
      if (cartItem.title === item.title){
        if (cartItem.quantity === 1){
          itemToRemove = this.state.cart.indexOf(cartItem);
        }
        cartItem.quantity -=1;
        return cartItem;
      }
      return cartItem;
    })

    if (typeof itemToRemove === 'number'){
      cart.splice(itemToRemove, 1);
    }

    this.setState({
      cart: cart,
      cartItemsNumber: number
    })
  }

  removeAllOfType(item, quantity) {
    const number = this.state.cartItemsNumber - quantity;
    let itemToRemove;

    let cart = this.state.cart.map(cartItem => {
      if (cartItem.title === item.title) {
        itemToRemove = this.state.cart.indexOf(cartItem);
      }
      return cartItem;
    })

    if (typeof itemToRemove === 'number'){
      cart.splice(itemToRemove, 1);
    }

    this.setState({
      cart: cart,
      cartItemsNumber: number
    })
  }


  render() {
    console.log('state: ', this.state);
    return (
      <Router>
        <div className="App">
          <Navbar cartItemsNumber={this.state.cartItemsNumber}></Navbar>
          <Switch>
            <Route path="/cart">
              <Cart
                items={this.state.cart}
                totalItems={this.state.cartItemsNumber}
                clearCart={this.clearCart}
                addItem={this.addItemToCart}
                removeItem={this.removeItemFromCart}
                removeAll={this.removeAllOfType}
              ></Cart>
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
