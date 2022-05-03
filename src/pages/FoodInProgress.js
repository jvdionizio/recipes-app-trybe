import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Ingredients from '../components/Ingredients/Ingredients';
import HeaderRecipes from '../components/HeaderRecipes';
import { getMealById } from '../helpers/TheMealDBAPI';

function FoodInProgress({ history, match }) {
  const [recipeDetails, setRecipeDetails] = useState();
  const path = history.location.pathname.split('/');

  const getDetails = async () => { // pegando os dados na API
    const { params: { id } } = match;
    const response = await getMealById(id); // dados totais
    setRecipeDetails(response);
    return response;
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {recipeDetails && (
        <div>
          <HeaderRecipes foodDetails={ recipeDetails } />
          <Ingredients recipeDetails={ recipeDetails } type={ path[1] } />
        </div>
      )}
    </div>
  );
}

FoodInProgress.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FoodInProgress;
