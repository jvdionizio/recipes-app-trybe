import PropTypes from 'prop-types';
import React from 'react';
import shareIcon from '../images/shareIcon.svg';

function HeaderRecipes({ foodDetails }) {
  const { strMealThumb, strMeal } = foodDetails[0];
  console.log(foodDetails);

  return (

    <div>
      <img
        data-testId="recipe-photo"
        alt="details"
        className="recipe-img"
        src={ strMealThumb }
      />
      <h2
        data-testId="recipe-title"
      >
        {strMeal}
      </h2>
      <input
        data-testid="share-btn"
        type="image"
        alt="share"
        src={ shareIcon }
      />
    </div>
  );
}

HeaderRecipes.propTypes = {
  foodDetails: PropTypes.object,
}.isRequired;

export default HeaderRecipes;
