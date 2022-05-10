import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  LoginContainer,
  LoginInput,
  LoginButton,
  LoginImage,
  LoginBody,
} from '../styles/login-style';
import userIcon from '../images/user_icon_001.jpg';
import lockIcon from '../images/icons8-lock-96 1.png';

function Login({ history }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    IsDisable: true,
  });
  const [clicked, setClicked] = useState(false);

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

  const divClick = () => {
    setClicked(true);
  };

  return (
    <LoginBody
      clicked={ clicked }
    >
      <LoginContainer
        onClick={ divClick }
        clicked={ clicked }
      >
        <div>
          <LoginImage src={ userIcon } alt="user icon" />
          <LoginInput
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ handleChange }
          />
        </div>
        <div>
          <LoginImage src={ lockIcon } alt="lock icon" />
          <LoginInput
            type="password"
            name="password"
            onChange={ handleChange }
            data-testid="password-input"
            placeholder="Senha"
          />
        </div>
        <LoginButton
          type="submit"
          data-testid="login-submit-btn"
          onClick={ handleClickSubmit }
          disabled={ login.IsDisable }
        >
          Entrar
        </LoginButton>
      </LoginContainer>
    </LoginBody>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
