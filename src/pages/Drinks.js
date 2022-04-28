import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

function Drinks({ history }) {
  const { DrinkReturns } = useContext(Context);
  const ONZE = 11;

  if (DrinkReturns === null) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  if (DrinkReturns.length === 1 && DrinkReturns !== null) {
    history.push(`/drinks/${DrinkReturns[0].idDrink}`);
  }
  // if (FoodReturns.length > DOZE) {
  //   FoodReturns.filter((el) => el )
  // }

  return (
    <div>
      <Header headerTitle="Drinks" history={ history } />
      { DrinkReturns !== null && DrinkReturns.filter((el, index) => index <= ONZE)
        .map((el, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              src={ el.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              alt="foto-bebida"
            />
            <p data-testid={ `${index}-card-name` }>
              {el.strDrink}
            </p>
          </div>
        ))}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Drinks;
