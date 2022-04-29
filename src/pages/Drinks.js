import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Context from '../context/Context';
import { getDrinks, getDrinkCategories } from '../helpers/TheCockTailDBAPI';

function Drinks({ history }) {
  const [renderRecipes, setRenderRecipes] = useState([]);
  const [renderCategories, setRenderCategories] = useState([]);
  const { DrinkReturns, allRecipes, setAllRecipes } = useContext(Context);

  const fetchAllRecipes = async () => {
    const recipes = await getDrinks();
    const categories = await getDrinkCategories();
    setRenderRecipes(recipes);
    setRenderCategories(categories);
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  useEffect(() => {
    setAllRecipes(renderRecipes);
  });

  const ONZE = 11;
  const CINCO = 5;

  if (DrinkReturns === null) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  if (DrinkReturns.length === 1 && DrinkReturns !== null) {
    history.push(`/drinks/${DrinkReturns[0].idDrink}`);
  }
  // if (FoodReturns.length > DOZE) {
  //   FoodReturns.filter((el) => el )
  // }

  return (
    <div>
      <Header headerTitle="Drinks" history={ history } />
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
      { allRecipes.filter((recipe, index) => index <= ONZE)
        .map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ recipe.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-bebida"
            />
            <p data-testid={ `${index}-card-name` }>
              {recipe.strDrink}
            </p>
          </div>
        ))}
      { DrinkReturns !== null && DrinkReturns.filter((el, index) => index <= ONZE)
        .map((el, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ el.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-bebida"
            />
            <p data-testid={ `${index}-card-name` }>
              {el.strDrink}
            </p>
          </div>
        ))}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Drinks;
