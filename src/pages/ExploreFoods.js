import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getRandomMeal } from '../helpers/TheMealDBAPI';

function ExploreFoods({ history }) {
  const getSurpriseFood = async () => {
    const response = await getRandomMeal();
    const id = response[0].idMeal;
    history.push(`/foods/${id}`);
  };

  return (
    <div>
      <Header headerTitle="Explore Foods" noSearch />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => getSurpriseFood() }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

ExploreFoods.propTypes = {
  history: PropTypes.func.isRequired,
};

export default ExploreFoods;
