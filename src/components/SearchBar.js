import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import context from '../context/Context';

function SearchBar({ headerTitle }) {
  const [searchInput, setSearchInput] = useState('');
  const [typeInput, setTypeInput] = useState('');

  const { handleClickFood, handleClickCockTail } = useContext(context);
  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="search-input"
          value={ searchInput }
          onChange={ ({ target }) => setSearchInput(target.value) }
        />
        <label htmlFor="SearchType">
          <label htmlFor="ing">
            <input
              name="SearchType"
              type="radio"
              data-testid="ingredient-search-radio"
              id="ing"
              value="ingredients"
              onChange={ ({ target }) => setTypeInput(target.value) }
            />
            ingredients
          </label>
          <label htmlFor="nameSearch">
            <input
              name="SearchType"
              type="radio"
              data-testid="name-search-radio"
              id="nameSearch"
              value="name"
              onChange={ ({ target }) => setTypeInput(target.value) }
            />
            Name
          </label>
          <label htmlFor="Firstletter">
            <input
              name="SearchType"
              type="radio"
              data-testid="first-letter-search-radio"
              id="Firstletter"
              value="firstLetter"
              onChange={ ({ target }) => setTypeInput(target.value) }
            />
            First-Letter
          </label>
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => (headerTitle === 'Foods'
            ? handleClickFood(searchInput, typeInput)
            : handleClickCockTail(searchInput, typeInput)) }
        >
          Search
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
export default SearchBar;
