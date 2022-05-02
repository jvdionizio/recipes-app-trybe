import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import { getRecipes } from '../helpers/TheMealDBAPI';
import { getDrinks } from '../helpers/TheCockTailDBAPI';

function AllRecipes({ headerTitle }) {
  const { allRecipes, setAllRecipes } = useContext(Context);

  const fetchAllRecipes = async () => {
    const recipes = headerTitle === 'Foods'
      ? await getRecipes() : await getDrinks();
    setAllRecipes(recipes);
  };

  useEffect(() => {
    fetchAllRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DOZE = 12;

  return (
    <div>
      { allRecipes.slice(0, DOZE)
        .map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ headerTitle === 'Foods' ? recipe.strMealThumb : recipe.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-bebida"
              className="recipe-img"
            />
            <p data-testid={ `${index}-card-name` }>
              { headerTitle === 'Foods' ? recipe.strMeal : recipe.strDrink }
            </p>
          </div>
        )) }
    </div>
  );
}

AllRecipes.propTypes = {
  headerTitle: PropTypes.string,
}.isRequired;

export default AllRecipes;
