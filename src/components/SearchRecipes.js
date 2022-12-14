import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';

function SearchRecipes({ headerTitle, history }) {
  const { FoodReturns, DrinkReturns } = useContext(Context);

  const typeRecipe = headerTitle === 'Foods' ? FoodReturns : DrinkReturns;
  console.log(typeRecipe);
  if (typeRecipe === null) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  if (typeRecipe.length === 1) {
    return headerTitle === 'Foods'
      ? (<Redirect to={ `/foods/${typeRecipe[0].idMeal}` } />)
      : (<Redirect to={ `/drinks/${typeRecipe[0].idDrink}` } />);
  }

  const DOZE = 12;

  const redirectDetails = (recipe) => {
    const sendToDetails = headerTitle === 'Foods'
      ? history.push(`/foods/${recipe.idMeal}`)
      : history.push(`/drinks/${recipe.idDrink}`);
    return sendToDetails;
  };

  return (
    <div>
      { typeRecipe.slice(0, DOZE)
        .map((recipe, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ index }
            onClick={ () => redirectDetails(recipe) }
            onKeyDown={ () => redirectDetails(recipe) }
            role="button"
            tabIndex="0"
          >
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
    </div>);
}

SearchRecipes.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchRecipes;
