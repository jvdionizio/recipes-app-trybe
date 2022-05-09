import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DoneRecipes({ history }) {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [linkCopied, setLinkCopied] = useState(false);
  const [renderDone, setRenderDone] = useState([]);

  const handleShare = (id, type) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setLinkCopied(id);
  };

  const filterFavorites = (type) => {
    if (type === 'food') {
      return setRenderDone(doneRecipes
        .filter((el) => el.type === 'food'));
    }

    if (type === 'drink') {
      return setRenderDone(doneRecipes
        .filter((el) => el.type === 'drink'));
    }
    return setRenderDone(doneRecipes);
  };

  console.log(doneRecipes);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setRenderDone(getDone);
    setDoneRecipes(getDone);
  }, []);
  const test = doneRecipes && doneRecipes.map((el) => (el.type === 'food'
    ? 'food' : 'drink'));
  const redirectDetails = (id, type) => {
    const sendToDetails = type === 'food'
      ? history.push(`/foods/${id}`)
      : history.push(`/drinks/${id}`);
    return sendToDetails;
  };

  return (
    <div>
      <Header headerTitle="Done Recipes" noSearch />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => filterFavorites('All') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => filterFavorites('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => filterFavorites('drink') }
        >
          Drinks
        </button>
      </div>
      { renderDone && renderDone.map((elem, index) => (
        <div key={ index }>
          <div
            onClick={ () => redirectDetails(elem.id, elem.type) }
            onKeyDown={ () => redirectDetails(elem.id, elem.type) }
            role="button"
            tabIndex="0"
          >
            <img
              data-testid={ `${index}-horizontal-image` }
              alt="foto comida"
              src={ elem.image }
              width="360px"
              height="150px"
            />
            <p
              data-testid={ `${index}-horizontal-name` }
            >
              {elem.name}
            </p>
          </div>
          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {elem.doneDate}
          </p>
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {test[index] === 'food' ? `${elem.nationality} - ${elem.category}`
              : `${elem.alcoholicOrNot}`}
          </p>
          { !elem.tag ? null : elem.tag.map((tag) => (
            <p
              key={ index }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          )) }
          <input
            data-testid={ `${index}-horizontal-share-btn` }
            type="image"
            alt="share"
            src={ shareIcon }
            onClick={ () => handleShare(elem.id, elem.type) }
            onKeyDown={ () => handleShare() }
            tabIndex="0"
          />
          {
            linkCopied === elem.id && <p>Link copied!</p>
          }
        </div>
      ))}
    </div>
  );
}

DoneRecipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DoneRecipes;
