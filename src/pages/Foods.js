import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function Foods({ history }) {
  return (
    <div>
      <Header headerTitle="Foods" history={ history } />
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Foods;
