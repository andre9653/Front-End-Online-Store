import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AllAssessments extends Component {
  render() {
    const { id } = this.props;
    const localStorageAssessments = JSON.parse(localStorage.getItem('notas'));
    if (localStorageAssessments.length === 0) return <h1>Nenhuma Avaliação</h1>;
    return (
      <div>
        {localStorageAssessments
          .filter(({ Productid }) => Productid === id.params.id)
          .map((assessment, index) => (
            <div key={ index * Math.random() }>
              <h5>{ assessment.email }</h5>
              <p>
                Nota:
                { assessment.nota }
              </p>
              <p>
                Comentário:
                { assessment.comentario }
              </p>
            </div>
          ))}
      </div>
    );
  }
}

AllAssessments.defaultProps = {
  id: {},
};

AllAssessments.propTypes = {
  id: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
