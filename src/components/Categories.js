import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import { getMealCategories, getMealByCategories } from '../helpers/TheMealDBAPI';
import { getDrinkCategories, getDrinkByCategory } from '../helpers/TheCockTailDBAPI';

function Categories({ headerTitle }) {
  const [renderCategories, setRenderCategories] = useState([]);
  const {
    setCategoryRecipes,
    setCategorySelected,
    categorySelected } = useContext(Context);
  const CINCO = 5;

  const fetchCategories = async () => {
    const categories = headerTitle === 'Foods'
      ? await getMealCategories() : await getDrinkCategories();
    setRenderCategories(categories);
  };

  useEffect(() => {
    fetchCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoryButton = async (target) => {
    if (categorySelected === target.value) {
      return setCategoryRecipes([]);
    }
    const categories = headerTitle === 'Foods'
      ? await getMealByCategories(target.value) : await getDrinkByCategory(target.value);
    setCategorySelected(target.value);
    setCategoryRecipes(categories);
  };

  const handleAll = () => {
    setCategoryRecipes([]);
  };

  console.log(categorySelected);

  return (
    <div>
      <button type="button" onClick={ () => handleAll() }>All</button>
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
  );
}

Categories.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export default Categories;
