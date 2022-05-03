import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getRandomDrink } from '../helpers/TheCockTailDBAPI';

function ExploreDrinks({ history }) {
  const getSurpriseDrink = async () => {
    const response = await getRandomDrink();
    const id = response[0].idDrink;
    history.push(`/drinks/${id}`);
  };
  return (
    <div>
      <Header headerTitle="Explore Drinks" noSearch />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => getSurpriseDrink() }
      >
        Surprise me!
      </button>

      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.func.isRequired,
};

export default ExploreDrinks;
