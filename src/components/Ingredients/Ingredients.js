import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Ingredients.module.css';

function Ingredients({ recipeDetails, type, page }) {
  const [list, setList] = useState();

  const DEZESSETE = 17;
  const TRINTA_DOIS = 32;
  const QUARENTA_SETE = 47;
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
      ings = recipeValues.slice(DEZESSETE, TRINTA_DOIS);
      measures = recipeValues.slice(TRINTA_DOIS, QUARENTA_SETE);
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
  };

  const renderList = () => (
    list && (
      <ul className={ style.list }>
        { list.map((item, index) => (
          <li key={ index }>{ item }</li>
        )) }
      </ul>)
  );

  const renderCheckBox = () => (
    list && list.map((item, index) => (
      <div key={ index }>
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
        { page === 'details' ? renderList() : renderCheckBox() }
      </section>
    </div>
  );
}

Ingredients.propTypes = {
  recipeDetails: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default Ingredients;
