import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeaderRecipes from '../components/HeaderRecipes';
import { getDrinkById } from '../helpers/TheCockTailDBAPI';

function DrinkDetails(props) {
  const [drinkDetails, setDrinkDetails] = useState();

  const getDrink = async () => { // pegando os dados na API
    const { match: { params: { id } } } = props;
    const response = await getDrinkById(id); // dados totais
    setDrinkDetails(response);
    return response;
  };
  console.log(drinkDetails);
  useEffect(() => {
    getDrink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {drinkDetails && <HeaderRecipes foodDetails={ drinkDetails } />}
    </div>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default DrinkDetails;
