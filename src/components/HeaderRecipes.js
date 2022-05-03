import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function HeaderRecipes({ foodDetails }) {
  const [recipeDetails, setRecipeDetails] = useState();
  let obj = {};
  console.log(recipeDetails);
  // console.log(foodDetails);
  // console.log(foodDetails[0].strDrinks);
  const test = foodDetails[0].strDrinks === undefined
    ? 'food' : 'drink';
  const conditional = (testCond) => {
    if (testCond === 'food') {
      const { strMealThumb, strMeal, strCategory, idMeal,
        strArea } = foodDetails[0];
      obj = {
        id: idMeal,
        type: 'food',
        nationality: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      };
    }
    if (testCond === 'drink') {
      const { strDrinkThumb, strDrink, strCategory,
        idDrink, strAlcoholic } = foodDetails[0];
      obj = {
        id: idDrink,
        type: 'drink',
        nationality: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
    }
  };
  useEffect(() => {
    conditional(test);
    console.log(obj);
    setRecipeDetails(obj);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(test);
  const handleFavorite = () => console.log(obj);
  // const { name, image, strCategory } = recipeDetails;

  return (
    <div>
      {recipeDetails && (
        <>
          <img
            data-testId="recipe-photo"
            alt="details"
            // className="recipe-img"
            width="360px"
            height="150px"
            src={ recipeDetails.image }
          />
          <h2
            data-testId="recipe-title"
          >
            {recipeDetails.name}
          </h2>
          <input
            data-testid="share-btn"
            type="image"
            alt="share"
            src={ shareIcon }
          />
          <input
            data-testid="favorite-btn"
            type="image"
            alt="share"
            src={ whiteHeartIcon }
            onClick={ () => handleFavorite() }
          />
          <p
            data-testId="recipe-category"
          >
            {recipeDetails.strCategory}
          </p>
        </>)}
    </div>
  );
}

HeaderRecipes.propTypes = {
  foodDetails: PropTypes.object,
}.isRequired;

export default HeaderRecipes;
