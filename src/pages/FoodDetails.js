import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeaderRecipes from '../components/HeaderRecipes';
import { getMealById } from '../helpers/TheMealDBAPI';

function FoodDetails(props) {
  const [foodDetails, setFoodDetails] = useState();

  const getFood = async () => { // pegando os dados na API
    const { match: { params: { id } } } = props;
    const response = await getMealById(id); // dados totais
    setFoodDetails(response);
    return response;
  };

  useEffect(() => {
    getFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {foodDetails && <HeaderRecipes foodDetails={ foodDetails } />}
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default FoodDetails;
