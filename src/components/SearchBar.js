import React, { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [typeInput, setTypeInput] = useState('');

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
          onClick={ () => console.log(typeInput, searchInput) }
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
