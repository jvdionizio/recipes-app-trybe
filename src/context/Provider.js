import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as getDrink from '../helpers/TheCockTailDBAPI';
import { getByFirstLetter, getByIngredients, getByName } from '../helpers/TheMealDBAPI';
import Context from './Context';

function Provider({ children }) {
  const [FoodReturns, setFoodReturns] = useState([]);
  const [DrinkReturns, setDrinkReturns] = useState([]);

  const handleClickFood = async (input, radio) => {
    if (radio === 'ingredients') {
      setFoodReturns(await getByIngredients(input));
    }
    if (radio === 'name') {
      setFoodReturns(await getByName(input));
    }
    if (radio === 'firstLetter') {
      const inputTest = input.length === 1 ? setFoodReturns(await getByFirstLetter(input))
        : global.alert('Your search must have only 1 (one) character');
      return inputTest;
    }
  };

  const handleClickCockTail = async (input, radio) => {
    if (radio === 'ingredients') {
      const response = await getDrink.getByIngredientsDrink(input);
      setDrinkReturns(response);
    }
    if (radio === 'name') {
      const response = await getDrink.getByNameDrink(input);
      setDrinkReturns(response);
    }
    if (radio === 'firstLetter') {
      const inputTest = input.length === 1
        ? setDrinkReturns(await getDrink.getByFirstLetterDrink(input))
        : global.alert('Your search must have only 1 (one) character');
      return inputTest;
    }
  };
  return (
    <Context.Provider
      value={ { handleClickFood,
        handleClickCockTail,
        FoodReturns,
        DrinkReturns,
        setFoodReturns,
        setDrinkReturns } }
    >
      {children}
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
