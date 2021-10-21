import React from 'react';
import PropTypes from 'prop-types';
import CartForm from './CartForm';

export default class CheckoutPage extends React.Component {
  render() {
    const { location: { state: { products, total } } } = this.props;
    return (
      <div>
        <ul>
          {products.map((product) => (
            <li key={ product.id }>
              {product.title}
              <p>
                Quantidade:
                {product.quantity}
              </p>
              <p>
                Preço unitário:
                {product.price}
              </p>
              <p>
                Preço total:
                {product.price * product.quantity}
              </p>
            </li>
          ))}
        </ul>
        <p>
          Total:
          {total}
        </p>
        <CartForm />
        <button type="submit">Comprar</button>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  location: PropTypes.objectOf().isRequired,
};
