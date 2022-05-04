import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Ingredients.module.css';
import RenderList from '../RenderList';

function Ingredients({ recipeDetails, type, page, history }) {
  const [list, setList] = useState();
  const [quant, setQuant] = useState(0);

  const VINTE_UM = 21;
  const TRINTA_SEIS = 36;
  const NOVE = 9;
  const VINTE_NOVE = 29;
  const QUARENTA_NOVE = 49;
  let ings = [];
  let measures = [];

  const sliceCond = () => {
    const recipeValues = Object.values(recipeDetails[0]);
    if (type === 'foods') {
      ings = recipeValues.slice(NOVE, VINTE_NOVE);
      measures = recipeValues.slice(VINTE_NOVE, QUARENTA_NOVE);
    } else {
      ings = recipeValues.slice(VINTE_UM, TRINTA_SEIS);
      measures = recipeValues.slice(TRINTA_SEIS, QUARENTA_NOVE);
    }
  };

  const getIngredientsAndMeasures = () => {
    sliceCond();
    const listIng = [];
    ings.forEach((curr, index) => {
      if (curr) {
        if (measures[index]) {
          return listIng.push(`${curr} - ${measures[index]}`);
        }
        return listIng.push(`${curr}`);
      }
    });
    setList(listIng);
  };

  useEffect(() => getIngredientsAndMeasures(), []);

  const stepDone = (target) => {
    target.nextSibling.classList.toggle(style.done);
    return target.checked ? setQuant(quant + 1) : setQuant(quant - 1);
  };

  const renderCheckBox = () => (
    list && list.map((item, index) => (
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
    ))
  );

  return (
    <div>
      <header>Ingredients</header>
      <section>
        { page === 'details' ? <RenderList list={ list } /> : renderCheckBox() }
      </section>
      <p data-testid="instructions">{recipeDetails[0].strInstructions}</p>
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

Ingredients.propTypes = {
  recipeDetails: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default Ingredients;
