import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from '../StyleList.module.css';
import finishRecipe from '../../helpers/DoneRecipesHelper';

function RenderCheckBox({ list, history, type, recipeDetails }) {
  const [quant, setQuant] = useState(0);
  const [usedIngs, setUsedIngs] = useState([]);

  const getProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const progress = getProgress === null ? [] : getProgress;
  const id = type === 'foods' ? recipeDetails[0].idMeal : recipeDetails[0].idDrink;
  const test = progress.some((item) => item.id === id);
  const sameId = [];

  const getDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const doneRecipes = getDone === null ? [] : getDone;
  console.log(doneRecipes);

  useEffect(() => {
    if (test) {
      progress.forEach((obj, index) => obj.id === id && sameId.push(index));
      const arrayItens = progress[sameId[0]].itens;
      setUsedIngs(arrayItens);
    }
  }, []);

  const stepDone = (target) => {
    target.nextSibling.classList.toggle(style.done);
    console.log(target.checked);
    if (test) {
      console.log('if');
      const ingsUsed = usedIngs;
      ingsUsed.push(target.value);
      setUsedIngs(ingsUsed);
      progress[sameId[0]] = { id, itens: usedIngs };
    } else {
      console.log('else');
      progress.push({ id, itens: [target.value] });
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(progress));
    return target.checked ? setQuant(quant + 1) : setQuant(quant - 1);
  };

  const saveDone = () => {
    const obj = finishRecipe(recipeDetails);
    console.log(obj);
    doneRecipes.push(obj);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/done-recipes');
  };

  // const ingredientContainer = document.getElementById('ingredients-container');

  /* const handleClick = ({ target }) => {
    if (test) {
      console.log(ingredientContainer);
      progress.forEach((obj, index) => obj.id === id
      && sameId.push(index));
      return ingredientContainer.innerHTML === progress[0].html;
    }
  }; */

  /* const isChecked = (item) => {
    if (usedIngs) {
      const conditional = usedIngs.some((itemLS) => item === itemLS);
      console.log(conditional);
      return conditional;
    }
  }; */

  return (
    <div id="ingredients-container">
      { list && list.map((item, index) => (
        <div
          data-testid={ `${index}-ingredient-step` }
          key={ index }
        >
          <input
            value={ item }
            type="checkbox"
            name="done"
            onChange={ ({ target }) => stepDone(target) }
            checked={ usedIngs.some((itemLS) => item === itemLS) }
          />
          <label htmlFor="done">{ item }</label>
        </div>
      )) }
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ list && list.length !== quant }
        onClick={ () => saveDone() }
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
