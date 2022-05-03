import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function RenderRecipesByCategory({ headerTitle, history }) {
  const { categoryRecipes } = useContext(Context);
  const DOZE = 12;

  const redirectDetails = (recipe) => {
    const sendToDetails = headerTitle === 'Foods'
      ? history.push(`/foods/${recipe.idMeal}`)
      : history.push(`/drinks/${recipe.idDrink}`);
    return sendToDetails;
  };

  return (
    <div>
      { categoryRecipes.slice(0, DOZE)
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
    </div>
  );
}

RenderRecipesByCategory.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RenderRecipesByCategory;
