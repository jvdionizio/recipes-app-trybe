import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import AllRecipes from '../components/AllRecipes';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Categories from '../components/Categories';
import SearchRecipes from '../components/SearchRecipes';
import Context from '../context/Context';
import RenderRecipesByCategory from '../components/RenderRecipesByCategory';

function Drinks({ history }) {
  const { DrinkReturns } = useContext(Context);

  return (
    <div>
      <Header headerTitle="Drinks" history={ history } />
      <Categories headerTitle="Drinks" />
      <RenderRecipesByCategory headerTitle="Drinks" history={ history } />
      { DrinkReturns === null || DrinkReturns.length > 0
        ? <SearchRecipes headerTitle="Drinks" history={ history } />
        : <AllRecipes headerTitle="Drinks" history={ history } />}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Drinks;
