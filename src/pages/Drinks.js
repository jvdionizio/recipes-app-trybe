import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

function Drinks({ history }) {
  return (
    <div>
      <Header headerTitle="Drinks" history={ history } />
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.func.isRequired,
};
export default Drinks;
