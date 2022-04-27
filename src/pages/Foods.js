import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';

function Foods({ history }) {
  return (
    <div>
      <Header headerTitle="Foods" history={ history } />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Foods;
