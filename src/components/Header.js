import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Frame1 from '../images/Frame1.png';
// import { Link } from 'react-router-dom';
import profileImg from '../images/profileIcon.svg';
import searchImg from '../images/searchIcon.svg';
import HeaderStyle, { HeaderIcons, LogoTitle } from '../styles/Header-style';
import SearchBar from './SearchBar';

function Header({ headerTitle, noSearch, history }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      <HeaderStyle>
        <LogoTitle>
          <img
            src={ Frame1 }
            alt="logo"
          />
          <h2
            data-testid="page-title"
          >
            {headerTitle}
          </h2>
        </LogoTitle>
        <HeaderIcons>
          <Link to="/profile">
            <input
              data-testid="profile-top-btn"
              type="image"
              alt="search"
              src={ profileImg }
              onClick={ () => history.push('/profile') }
            />
          </Link>

          { !noSearch && (
            <input
              data-testid="search-top-btn"
              type="image"
              alt="search"
              src={ searchImg }
              onClick={ () => setShowSearchBar(!showSearchBar) }
            />
          )}
        </HeaderIcons>
      </HeaderStyle>
      <div>
        {showSearchBar && (
          <SearchBar headerTitle={ headerTitle } />
        )}
      </div>

    </div>
  );
}

Header.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  headerTitle: PropTypes.string.isRequired,
  noSearch: PropTypes.bool.isRequired,
};

export default Header;
