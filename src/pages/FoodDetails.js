import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeaderRecipes from '../components/HeaderRecipes';
import Ingredients from '../components/Ingredients/Ingredients';
import Recommended from '../components/Recommended';
import { getMealById } from '../helpers/TheMealDBAPI';

function FoodDetails(props) {
  const [recipeDetails, setRecipeDetails] = useState();
  // const [inProgressRecipes, setInProgressRecipes] = useState([]);
  const { history } = props;

  const getFood = async () => { // pegando os dados na API
    const { match: { params: { id } } } = props;
    const response = await getMealById(id); // dados totais
    setRecipeDetails(response);
    return response;
  };

  /* const continueRecipe = () => {
    inProgressRecipes.map((recipe) => recipe.id === id ? ());
  }; */

  useEffect(() => {
    getFood();
    const recipeInit = localStorage.getItem('inProgressRecipes');
    setInProgressRecipes(recipeInit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToProgress = () => {
    const sendToProgress = recipeDetails[0].idMeal
      ? history.push(`/foods/${recipeDetails[0].idMeal}/in-progress`)
      : history.push(`/drikns/${recipeDetails[0].idDrink}/in-progress`);
    return sendToProgress;
  };
  continueRecipe();
  return (
    <div>
      {recipeDetails && (
        <div>
          <HeaderRecipes foodDetails={ recipeDetails } />
          <Ingredients
            recipeDetails={ recipeDetails }
            page="details"
          />
          <p data-testid="instructions">{recipeDetails[0].strInstructions}</p>
          <iframe
            src={ recipeDetails[0].strYoutube }
            title="recipe-video"
            data-testid="video"
          />
          <Recommended type="foods" history={ history } />
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => redirectToProgress() }
            style={ { bottom: 0, position: 'fixed' } }
          >
            Start Recipe
          </button>
        </div>
      )}
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default FoodDetails;
