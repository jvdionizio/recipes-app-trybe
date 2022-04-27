import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import profileImg from '../images/profileIcon.svg';
import searchImg from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ headerTitle, noSearch, history }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      <Link to="/profile">
        <input
          data-testid="profile-top-btn"
          type="image"
          alt="search"
          src={ profileImg }
          onClick={ () => history.push('/profile') }
        />
      </Link>
      <h2
        data-testid="page-title"
      >
        {headerTitle}
      </h2>
      { !noSearch && (
        <input
          data-testid="search-top-btn"
          type="image"
          alt="search"
          src={ searchImg }
          onClick={ () => setShowSearchBar(!showSearchBar) }
        />
      )}
      <div>
        {showSearchBar && (
          <SearchBar />
        )}
      </div>

    </div>
  );
}

Header.propTypes = {
  history: PropTypes.func.isRequired,
  headerTitle: PropTypes.string.isRequired,
  noSearch: PropTypes.bool.isRequired,
};

export default Header;
