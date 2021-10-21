import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductInCart from './ProductInCart';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const localStorageCartList = JSON.parse(localStorage.getItem('productList'));
    const products = [];
    localStorageCartList.forEach((jsonProduct) => {
      products.push({ ...JSON.parse(jsonProduct), quantity: 1 });
    });
    this.state = {
      products,
    };
  }

  handleChange = (newQuantity, index) => {
    const { products } = this.state;
    products[index].quantity = newQuantity;
    this.setState({
      products,
    });
  }

  calculateTotal = () => {
    const { products } = this.state;
    const newTotal = products.reduce((acumulator, current) => (
      acumulator + current.quantity * current.price
    ), 0);
    return new Intl
      .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newTotal);
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {products.map((product, index) => (
          <ProductInCart
            key={ product.id }
            product={ product }
            index={ index }
            handleChange={ this.handleChange }
          />
        ))}
        <div>
          { this.calculateTotal() }
        </div>
        <Link
          to={ {
            pathname: '/checkout',
            state: {
              products,
              total: this.calculateTotal(),
            },
          } }
          data-testid="checkout-products"
        >
          Checkout
        </Link>
      </div>
    );
  }
}
