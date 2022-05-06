import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RenderList from '../RenderList';
import RenderCheckBox from '../RenderCheckBox/RenderCheckBox';

function Ingredients({ recipeDetails, type, page, history }) {
  const [list, setList] = useState();

  const measures = [];
  const ings = [];
  const ingsIndex = [];
  const measuresIndex = [];

  const sliceCond = () => {
    const recipeKeys = Object.keys(recipeDetails[0]);
    recipeKeys
      .forEach((key, index) => key
        .includes('strIngredient') && ingsIndex.push(index));
    recipeKeys
      .forEach((key, index) => key
        .includes('strMeasure') && measuresIndex.push(index));
    const recipeValues = Object.values(recipeDetails[0]);
    ingsIndex.forEach((index) => {
      ings.push(recipeValues[index]);
    });
    measuresIndex.forEach((index) => {
      measures.push(recipeValues[index]);
    });
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getIngredientsAndMeasures(), []);

  return (
    <div>
      <header>Ingredients</header>
      <section>
        { page === 'details'
          ? <RenderList list={ list } />
          : (
            <RenderCheckBox
              list={ list }
              history={ history }
              type={ type }
              recipeDetails={ recipeDetails }
            />) }
      </section>
    </div>
  );
}

Ingredients.propTypes = {
  recipeDetails: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default Ingredients;
