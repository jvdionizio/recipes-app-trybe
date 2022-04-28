import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

function Foods({ history }) {
  const { FoodReturns } = useContext(Context);
  const DOZE = 12;

  if (FoodReturns === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  if (FoodReturns.length === 1 && FoodReturns !== null) {
    history.push(`foods/${FoodReturns[0].idMeal}`);
  }
  // if (FoodReturns.length > DOZE) {
  //   FoodReturns.filter((el) => el )
  // }

  return (
    <div>
      <Header headerTitle="Foods" history={ history } />
      { FoodReturns !== null && FoodReturns.filter((el, index) => index <= DOZE)
        .map((el, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ el.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-comida"
            />
            <p data-testid={ `${index}-card-name` }>
              {el.strMeal}
            </p>
          </div>
        ))}
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Foods;
