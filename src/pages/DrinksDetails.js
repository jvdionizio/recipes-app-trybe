import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeaderRecipes from '../components/HeaderRecipes';
import Ingredients from '../components/Ingredients/Ingredients';
import Recommended from '../components/Recommended';
import { getDrinkById } from '../helpers/TheCockTailDBAPI';

function DrinkDetails(props) {
  const [drinkDetails, setDrinkDetails] = useState();
  const { history } = props;

  const videoURL = drinkDetails && drinkDetails[0].strYoutube;
  console.log(videoURL);
  const embedVideoURL = videoURL && videoURL.replace('watch', 'embed');

  const getDrink = async () => { // pegando os dados na API
    const { match: { params: { id } } } = props;
    const response = await getDrinkById(id); // dados totais
    setDrinkDetails(response);
    return response;
  };

  const redirectToProgress = () => {
    const sendToProgress = drinkDetails[0].idMeal
      ? history.push(`/foods/${drinkDetails[0].idMeal}/in-progress`)
      : history.push(`/drinks/${drinkDetails[0].idDrink}/in-progress`);
    return sendToProgress;
  };

  console.log(drinkDetails);
  useEffect(() => {
    getDrink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {drinkDetails && (
        <div>
          <HeaderRecipes foodDetails={ drinkDetails } />
          <Ingredients
            recipeDetails={ drinkDetails }
            page="details"
          />
          <p data-testid="instructions">{drinkDetails[0].strInstructions}</p>
          { embedVideoURL && (
            <iframe
              src={ embedVideoURL }
              title="recipe-video"
              data-testid="video"
            />) }
          <Recommended type="drinks" history={ history } />
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => redirectToProgress() }
            style={ { bottom: 0, position: 'fixed' } }
          >
            Star Recipe
          </button>
        </div>
      )}
    </div>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default DrinkDetails;
