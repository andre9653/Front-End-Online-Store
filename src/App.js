import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import SearchBar from './components/SearchBar';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from './components/CheckoutPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalItens: 0,
    };
  }

  handleClickSomeCart = () => {
    this.setState((prevState) => ({ totalItens: prevState.totalItens + 1 }));
  }

  render() {
    const { totalItens } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<SearchBar
              handleClickSomeCart={ this.handleClickSomeCart }
              totalItens={ totalItens }
            />) }
          />
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
          <Route exact path="/details/:id" component={ ProductDetails } />
          <Route exact path="/checkout" component={ CheckoutPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
