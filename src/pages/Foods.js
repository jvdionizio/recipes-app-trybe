import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import AllRecipes from '../components/AllRecipes';
import Context from '../context/Context';
import SearchRecipes from '../components/SearchRecipes';
import Categories from '../components/Categories';
import RenderRecipesByCategory from '../components/RenderRecipesByCategory';

function Foods({ history }) {
  const { FoodReturns, categoryRecipes } = useContext(Context);
  console.log(categoryRecipes);

  return (
    <div>
      <Header headerTitle="Foods" history={ history } />
      <Categories headerTitle="Foods" />
      <RenderRecipesByCategory headerTitle="Foods" history={ history } />
      { FoodReturns === null || FoodReturns.length > 0
        ? <SearchRecipes headerTitle="Foods" history={ history } />
        : <AllRecipes headerTitle="Foods" history={ history } /> }
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Foods;
