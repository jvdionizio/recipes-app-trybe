import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function Favorites({ history }) {
  const [linkCopied, setLinkCopied] = useState(false);
  const [listFavorites, SetListFavorites] = useState([]);

  useEffect(() => {
    const foodFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (foodFavorites !== null) {
      SetListFavorites(foodFavorites);
    }
    console.log(foodFavorites);
  }, []);

  const handleShare = (id, type) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setLinkCopied(id);
  };
  console.log(listFavorites);
  const test = listFavorites.map((el) => (el.type === 'food'
    ? 'food' : 'drink'));

  const redirectDetails = (id, type) => {
    const sendToDetails = type === 'food'
      ? history.push(`/foods/${id}`)
      : history.push(`/drinks/${id}`);
    return sendToDetails;
  };

  return (
    <div>
      <Header headerTitle="Favorite Recipes" noSearch />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {listFavorites.map((elem, index) => (
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
            data-testid={ `${index}-horizontal-top-text` }
          >
            {test[index] === 'food' ? `${elem.nationality} - ${elem.category}`
              : `${elem.alcoholicOrNot}`}
          </p>
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
          <input
            data-testid={ `${index}-horizontal-favorite-btn` }
            type="image"
            alt="share"
            src={ blackHeartIcon }
            onClick={ () => {} }
          />
        </div>
      ))}
    </div>
  );
}

Favorites.propTypes = {
  history: PropTypes.obj,
}.isRequired;

export default Favorites;
// falta req 64,65
