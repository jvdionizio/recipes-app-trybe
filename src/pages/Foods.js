import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import AllRecipes from '../components/AllRecipes';
import Context from '../context/Context';
import { getMealByCategories } from '../helpers/TheMealDBAPI';
import SearchRecipes from '../components/SearchRecipes';

function Foods({ history }) {
  const [renderCategories, setRenderCategories] = useState([]);
  const [foodReturnsByCategory, setFoodReturnsByCategory] = useState([]);
  const { FoodReturns } = useContext(Context);

  console.log(setRenderCategories);

  const CINCO = 5;

  // if (FoodReturns.length > DOZE) {
  //   FoodReturns.filter((el) => el )
  // }

  const handleCategoryButton = async (target) => {
    const foodByCategory = await getMealByCategories(target.value);
    setFoodReturnsByCategory(foodByCategory);
  };

  console.log(foodReturnsByCategory);
  return (
    <div>
      <Header headerTitle="Foods" history={ history } />
      <div>
        <button type="button">All</button>
        { renderCategories.filter((category, index) => index < CINCO)
          .map((category) => (
            <button
              key={ category.strCategory }
              value={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ ({ target }) => handleCategoryButton(target) }
            >
              { category.strCategory }
            </button>
          )) }
      </div>
      { FoodReturns.length > 1
        ? <SearchRecipes headerTitle="Foods" /> : <AllRecipes headerTitle="Foods" /> }
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Foods;
