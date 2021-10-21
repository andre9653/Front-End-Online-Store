import React from 'react';

export default class CartForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="fullname">
          Nome Completo
          <input type="text" data-testid="checkout-fullname" id="fullname" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" data-testid="checkout-email" id="email" required />
        </label>
        <label htmlFor="cpf">
          CPF
          <input type="text" data-testid="checkout-cpf" id="cpf" required />
        </label>
        <label htmlFor="phone">
          Telefone
          <input type="text" data-testid="checkout-phone" id="phone" required />
        </label>
        <label htmlFor="cep">
          CEP
          <input type="text" data-testid="checkout-cep" id="cep" required />
        </label>
        <label htmlFor="address">
          Endereço
          <input type="text" data-testid="checkout-address" id="address" required />
        </label>
      </form>
    );
  }
}
