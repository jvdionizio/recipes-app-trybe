import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { getDrinkByCategory, getDrinkCategories } from '../helpers/TheCockTailDBAPI';
import { getMealByCategories, getMealCategories } from '../helpers/TheMealDBAPI';
import CategoriesStyle from '../styles/Categories-btn';

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
    <CategoriesStyle>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleAll() }
      >
        All
      </button>
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
    </CategoriesStyle>
  );
}

Categories.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export default Categories;
