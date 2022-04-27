import React from 'react';

function SearchBar() {
  return (
    <div>
      <form>
        <input
          type="text"
        />
        <label htmlFor="SearchType">
          <label htmlFor="ing">
            <input
              name="SearchType"
              type="radio"
              data-testid="ingredient-search-radio"
              id="ing"
            />
            ingredients
          </label>
          <label htmlFor="nameSearch">
            <input
              name="SearchType"
              type="radio"
              data-testid="name-search-radio"
              id="nameSearch"
            />
            Name
          </label>
          <label htmlFor="Firstletter">
            <input
              name="SearchType"
              type="radio"
              data-testid="first-letter-search-radio"
              id="Firstletter"
            />
            First-Letter
          </label>
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
