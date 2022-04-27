import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Profile({ history }) {
  const [localUser, setLocalUser] = useState('');
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('user'));
    setLocalUser(getUser.email);
  }, []);
  return (
    <div>
      <Header
        headerTitle="Profile"
        noSearch
      />
      <h2 data-testid="profile-email">
        {localUser}
      </h2>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => localStorage.clear() }
        >
          Logout
        </button>
      </Link>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.func.isRequired,
};
export default Profile;
