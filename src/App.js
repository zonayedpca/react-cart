import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import Menubar from './components/Menubar';
import Item from './components/Item';
import SingleItem from './components/SingleItem';
import Cart from './components/Cart';
import Footer from './components/Footer';

import { items, cartItems } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      cartItems: cartItems
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(id) {
    let items = this.state.items;
    let cartItems = this.state.cartItems;
    const idSearch = cartItems.map(cartItem => cartItem.id);
    if(idSearch.includes(id)) {
      let allCartItems = cartItems;
      let oneCartItems = allCartItems.filter(item => item.id === id);
      allCartItems = allCartItems.filter(item => item.id !== id);
      oneCartItems = oneCartItems[0];
      oneCartItems.quantity += 1;
      allCartItems = [...allCartItems, ...oneCartItems];
    } else {
      let newItem = items.filter(item => item.id === id);
      newItem = newItem[0];
      newItem = {id: newItem.id, title: newItem.title, quantity: 1, image: newItem.image, body: newItem.body};
      cartItems = [...cartItems, newItem];
      this.setState({cartItems});
    }
  }

  removeFromCart(id) {
    let cartItems = this.state.cartItems;
    cartItems = cartItems.filter(cartItem => cartItem.id !== id);
    this.setState({cartItems});
  }

  render() {
    return (
      <Router basename='/react-cart/'>
        <div className="App">
          <Container className="container">
            <Menubar cartItems={this.state.cartItems} />
            <Route exact path="/" render={()=><Item items={this.state.items} addToCart={this.addToCart} />} />
            <Route exact path="/item" render={()=><Item items={this.state.items} addToCart={this.addToCart} />} />
            <Route exact path="/cart" render={()=><Cart items={this.state.cartItems} removeFromCart={this.removeFromCart} />} />
            <Route path="/item/:id" render={(props)=><SingleItem item={this.state.items} addToCart={this.addToCart} {...props} />} />
            <Footer />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
