import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as thecocktaildb from '../helpers/TheCockTailDBAPI';
import * as theMealdbApi from '../helpers/TheMealDBAPI';

function Login({ history }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    IsDisable: true,
  });
  useEffect(() => {
    theMealdbApi.getByFirstLetter('a');
    theMealdbApi.getByIngredients('butter');
    theMealdbApi.getByName('pie');
    thecocktaildb.getByFirstLetterDrink('a');
    thecocktaildb.getByIngredientsDrink('apple');
    thecocktaildb.getByNameDrink('margarita');
  }, []);
  const validateButton = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const SEIS = 6;
    const { email, password } = login;
    // console.log(emailRegex.test(email));
    if ((emailRegex.test(email)) && password.length >= SEIS) {
      setLogin((state) => ({
        ...state,
        IsDisable: false,

      }));
    } else {
      setLogin((state) => ({
        ...state,
        IsDisable: true,
      }));
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin((state) => ({
      ...state,
      [name]: value,
    }));
    validateButton();
  };

  const handleClickSubmit = () => {
    const { email } = login;
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    history.push('/foods');
  };

  return (
    <div className="Login">
      <input
        name="email"
        type="email"
        data-testid="email-input"
        placeholder="Digite seu email"
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        onChange={ handleChange }
        data-testid="password-input"
        placeholder="Digite sua senha"
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        onClick={ handleClickSubmit }
        disabled={ login.IsDisable }
      >
        Entrar
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
