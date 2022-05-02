import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import AllRecipes from '../components/AllRecipes';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import SearchRecipes from '../components/SearchRecipes';
import Context from '../context/Context';
import { getDrinks, getDrinkCategories } from '../helpers/TheCockTailDBAPI';

function Drinks({ history }) {
  const [renderRecipes, setRenderRecipes] = useState([]);
  const [renderCategories, setRenderCategories] = useState([]);
  const { DrinkReturns, setAllRecipes } = useContext(Context);

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
      { DrinkReturns.length > 1
        ? <SearchRecipes headerTitle="Drinks" /> : <AllRecipes headerTitle="Drinks" />}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Drinks;
