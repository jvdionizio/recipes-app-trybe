import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function SearchRecipes({ history, headerTitle }) {
  const DOZE = 12;

  const { FoodReturns, DrinkReturns } = useContext(Context);

  const typeRecipe = headerTitle === 'Foods' ? FoodReturns : DrinkReturns;

  if (typeRecipe === null) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  if (typeRecipe.length === 1 && typeRecipe !== null) {
    history.push(`/foods/${typeRecipe[0].idMeal}`);
  }

  return (
    <div>
      { typeRecipe.filter((recipe, index) => index <= DOZE)
        .map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ recipe.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-receita"
              className="recipe-img"
            />
            <p data-testid={ `${index}-card-name` }>
              {recipe.strMeal}
            </p>
          </div>
        ))}
    </div>);
}

SearchRecipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  headerTitle: PropTypes.string.isRequired,
};

export default SearchRecipes;
