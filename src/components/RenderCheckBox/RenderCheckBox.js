import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from '../StyleList.module.css';

function RenderCheckBox({ list, history, type, recipeDetails }) {
  const [quant, setQuant] = useState(0);

  const getProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const progress = getProgress === null ? [] : getProgress;
  const id = type === 'foods' ? recipeDetails[0].idMeal : recipeDetails[0].idDrink;
  const test = progress.some((item) => item.id === id);
  const sameId = [];

  const stepDone = (target) => {
    target.nextSibling.classList.toggle(style.done);
    if (test) {
      progress.forEach((obj, index) => obj.id === id && sameId.push(index));
      progress[sameId[0]] = { id, html: target.parentNode.parentNode.innerHTML };
    } else {
      progress.push({ id, html: target.parentNode.parentNode.innerHTML });
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(progress));
    return target.checked ? setQuant(quant + 1) : setQuant(quant - 1);
  };
  const ingredientContainer = document.getElementById('ingredients-container');
  const gambiarra = () => ingredientContainer.innerHTML === progress[0].html;

  if (test) {
    progress.forEach((obj, index) => obj.id === id && sameId.push(index));
    gambiarra();
  }

  return (
    <div>
      { list && list.map((item, index) => (
        <div
          data-testid={ `${index}-ingredient-step` }
          key={ index }
        >
          <input
            type="checkbox"
            name="done"
            onClick={ ({ target }) => stepDone(target) }
          />
          <label htmlFor="done">{ item }</label>
        </div>
      )) }
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ list && list.length !== quant }
        onClick={ () => history.push('/done-recipes') }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

RenderCheckBox.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  list: PropTypes.arrayOf(PropTypes.any),
  type: PropTypes.string,
}.isRequired;

export default RenderCheckBox;
