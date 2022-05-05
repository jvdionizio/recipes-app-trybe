import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import conditional from '../helpers/HeaderRecipesHelper';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function HeaderRecipes({ foodDetails }) {
  const [recipeDetails, setRecipeDetails] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  // let obj = {};

  const handleShare = () => {
    copy(window.location.href);
    setLinkCopied(true);
  };

  useEffect(() => {
    // conditional(test);
    const obj = conditional(foodDetails);
    console.log(obj);
    setRecipeDetails(obj);
    const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getFavorites !== null) {
      const testFavorites = getFavorites.some((el) => el.id === obj.id);
      console.log(testFavorites);
      setIsFavorite(testFavorites);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickFavorite = async (index) => {
    if (isFavorite === false) {
      const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const favorites = getFavorites === null ? [] : getFavorites;
      favorites.push(recipeDetails);
      // console.log(favorites);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
    }
    if (isFavorite === true) {
      const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const favorites = getFavorites.filter((el) => el.id !== index);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
    }
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
            onClick={ () => handleClickFavorite(recipeDetails.id) }
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
