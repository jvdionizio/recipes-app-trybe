import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Ingredients from '../components/Ingredients/Ingredients';
import HeaderRecipes from '../components/HeaderRecipes';
import { getDrinkById } from '../helpers/TheCockTailDBAPI';

function DrinkInProgress({ history, match }) {
  const [recipeDetails, setRecipeDetails] = useState();
  const path = history.location.pathname.split('/');

  const getDetails = async () => { // pegando os dados na API
    const { params: { id } } = match;
    const response = await getDrinkById(id); // dados totais
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
          <Ingredients
            recipeDetails={ recipeDetails }
            type={ path[1] }
            page="progress"
            history={ history }
          />
          <p data-testid="instructions">{recipeDetails[0].strInstructions}</p>
        </div>
      )}
    </div>
  );
}

DrinkInProgress.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DrinkInProgress;
