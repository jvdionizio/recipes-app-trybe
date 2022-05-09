import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecipes } from '../helpers/TheMealDBAPI';
import { getDrinks } from '../helpers/TheCockTailDBAPI';
import './Recommended.css';

function Recommended({ type, history }) {
  const [recommended, setRecommended] = useState([]);
  console.log(history);

  const redirectDetails = (recipe) => {
    const sendToDetails = type === 'foods'
      ? history.push(`/drinks/${recipe.idDrink}`)
      : history.push(`/foods/${recipe.idMeal}`);
    return sendToDetails;
  };

  const getRecommended = async () => {
    if (type === 'foods') {
      return setRecommended(await getDrinks());
    }
    return setRecommended(await getRecipes());
  };

  const SEIS = 6;

  useEffect(() => {
    getRecommended();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { recommended.slice(0, SEIS)
        .map((recipe, index) => (
          <div
            className={ index < 2 ? 'diplay' : 'diplay-none' }
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            onClick={ () => redirectDetails(recipe) }
            onKeyDown={ () => redirectDetails(recipe) }
            role="button"
            tabIndex="0"
          >
            <img
              src={ type === 'foods' ? recipe.strDrinkThumb : recipe.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-bebida"
              className="recipe-img"
            />
            <p data-testid={ `${index}-recomendation-title` }>
              { type === 'foods' ? recipe.strDrink : recipe.strMeal }
            </p>
          </div>
        )) }
    </div>
  );
}

Recommended.propTypes = {
  type: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Recommended;
