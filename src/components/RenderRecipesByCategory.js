import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function RenderRecipesByCategory({ headerTitle }) {
  const { categoryRecipes } = useContext(Context);
  const DOZE = 12;
  console.log(categoryRecipes);

  return (
    <div>
      { categoryRecipes.slice(0, DOZE)
        .map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ headerTitle === 'Foods' ? recipe.strMealThumb : recipe.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-receita"
              className="recipe-img"
            />
            <p data-testid={ `${index}-card-name` }>
              {headerTitle === 'Foods' ? recipe.strMeal : recipe.strDrink}
            </p>
          </div>
        ))}
    </div>
  );
}

RenderRecipesByCategory.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export default RenderRecipesByCategory;
