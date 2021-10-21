// eslint-disable-next-line max-classes-per-file
import React from 'react';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="">
          E-Mail:
          <input
            type="email"
            onChange={ this.handleChange }
            value={ this.state.email }
          />
        </label>
        <label htmlFor="">
          Senha:
          <input type="password" />
        </label>
        <button type="button">Login</button>
      </form>
    );
  }
}

export const 

// eslint-disable-next-line react/no-multi-comp
class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualEmail: props.email,
    };
  }

  render() {
    return (
      <>
        <header>
          email:
          {' '}
          {this.state.email}
        </header>
        <h1>Ranking</h1>
        <section>
          <ol>
            <li>Pessoa 1</li>
            <li>Pessoa 2</li>
            <li>Pessoa 3</li>
            <li>Pessoa 4</li>
          </ol>
        </section>
      </>
    );
  }
}
