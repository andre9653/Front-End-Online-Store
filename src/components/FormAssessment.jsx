import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormAssessment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      nota: '',
      comentario: '',
      Productid: props.id.params.id,
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleLocalStorage() {
    const localStorageArray = JSON.parse(localStorage.getItem('notas'));
    localStorageArray.push(this.state);
    localStorage.setItem('notas', JSON.stringify(localStorageArray));
    const { handleClick } = this.props;
    handleClick(this.state);
  }

  render() {
    const { email, nota, comentario } = this.state;
    if (!localStorage.getItem('notas')) localStorage.setItem('notas', '[]');
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              value={ email }
              name="email"
              id="email"
              placeholder="Seu Email"
              onChange={ this.handleChanges }
            />
          </label>
          <select value={ nota } name="nota" onChange={ this.handleChanges }>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="comment">
            <textarea
              value={ comentario }
              name="comentario"
              id="comment"
              type="text"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChanges }
            />
          </label>
          <button type="button" onClick={ this.handleLocalStorage }>Enviar</button>
        </form>
      </div>
    );
  }
}

FormAssessment.defaultProps = {
  id: {},
};

FormAssessment.propTypes = {
  id: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  handleClick: PropTypes.func.isRequired,
};
