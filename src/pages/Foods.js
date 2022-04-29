import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Context from '../context/Context';
import { getRecipes, getMealCategories } from '../helpers/TheMealDBAPI';

function Foods({ history }) {
  const [renderRecipes, setRenderRecipes] = useState([]);
  const [renderCategories, setRenderCategories] = useState([]);
  const { FoodReturns, allRecipes, setAllRecipes } = useContext(Context);

  const fetchAllRecipes = async () => {
    const recipes = await getRecipes();
    const categories = await getMealCategories();
    setRenderRecipes(recipes);
    setRenderCategories(categories);
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  useEffect(() => {
    setAllRecipes(renderRecipes);
  });

  const DOZE = 12;
  const CINCO = 5;

  if (FoodReturns === null) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  if (FoodReturns.length === 1 && FoodReturns !== null) {
    history.push(`/foods/${FoodReturns[0].idMeal}`);
  }
  // if (FoodReturns.length > DOZE) {
  //   FoodReturns.filter((el) => el )
  // }
  console.log(renderCategories);
  return (
    <div>
      <Header headerTitle="Foods" history={ history } />
      <div>
        <button type="button">All</button>
        { renderCategories.filter((category, index) => index < CINCO)
          .map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
            >
              { category.strCategory }
            </button>
          )) }
      </div>
      { allRecipes.filter((recipe, index) => index < DOZE)
        .map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ recipe.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-bebida"
            />
            <p data-testid={ `${index}-card-name` }>
              {recipe.strMeal}
            </p>
          </div>
        ))}
      { FoodReturns !== null && FoodReturns.filter((recipe, index) => index <= DOZE)
        .map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ recipe.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-comida"
            />
            <p data-testid={ `${index}-card-name` }>
              {recipe.strMeal}
            </p>
          </div>
        ))}
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Foods;
