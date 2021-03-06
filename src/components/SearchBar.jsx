import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RenderCard from './RenderCard';
import Category from './Category';
import '../App.css';

const api = require('../services/api');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
      productsInCartNumber: 0,
    };
    this.handleCartButtonClick = this.handleCartButtonClick.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleCartButtonClick() {
    const { handleClickSomeCart } = this.props;
    const { productsInCartNumber } = this.state;
    const total = productsInCartNumber + 1;
    handleClickSomeCart(total);
    this.setState((prevState) => ({
      productsInCartNumber: prevState.productsInCartNumber + 1,
    }));
  }

  // async componentDidMount() {
  //   const products = await api.getProductsFromCategoryAndQuery();
  //   updateState(products);
  // }

  // updateState = (products) => this.setState({ products: products.results });

  handleClick = () => {
    const { searchText } = this.state;
    return api.getProductsFromCategoryAndQuery('&CATEGORY_ID', searchText)
      .then((products) => {
        this.setState({ products: products.results });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleChangeCategory(catego) {
    return api.getProductsFromCategoryAndQuery(catego)
      .then((products) => {
        this.setState({ products: products.results });
      });
  }

  render() {
    const { searchText, products, productsInCartNumber } = this.state;
    return (
      <main>
        <label htmlFor="input-search-bar">
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <input
            name="searchText"
            type="text"
            id="input-search-bar"
            data-testid="query-input"
            value={ searchText }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
        <Link to="shoppingcart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <span data-testid="shopping-cart-size">{productsInCartNumber}</span>
        <Category onChange={ this.handleChangeCategory } />
        <RenderCard
          products={ products }
          handleCartButtonClick={ this.handleCartButtonClick }
          productsInCartNumber={ productsInCartNumber }
        />
      </main>
    );
  }
}

SearchBar.propTypes = {
  location: PropTypes.objectOf().isRequired,
};
