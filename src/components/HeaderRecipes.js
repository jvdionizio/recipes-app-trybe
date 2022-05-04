import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function HeaderRecipes({ foodDetails }) {
  const [recipeDetails, setRecipeDetails] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleShare = () => {
    console.log('share');
    console.log(window.location.href);
    copy(window.location.href);
    setLinkCopied(true);
  };

  // const { favoritesRecipes, setFavoritesRecipes } = useContext(Context);
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

  const handleClickFavorite = async () => {
    const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favorites = getFavorites === null ? [] : getFavorites;
    favorites.push(recipeDetails);
    console.log(favorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };
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
            onClick={ () => handleShare() }
            onKeyDown={ () => handleShare() }
            tabIndex="0"
          />
          <input
            data-testid="favorite-btn"
            type="image"
            alt="share"
            src={ isFavorite === false ? whiteHeartIcon : blackHeartIcon }
            onClick={ () => handleClickFavorite() }
          />
          <p
            data-testId="recipe-category"
          >
            {recipeDetails.strCategory}
          </p>
          {
            linkCopied && <p>Link copied!</p>
          }
        </>)}
    </div>
  );
}

HeaderRecipes.propTypes = {
  foodDetails: PropTypes.object,
}.isRequired;

export default HeaderRecipes;
