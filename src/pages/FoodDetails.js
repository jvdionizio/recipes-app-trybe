import React from 'react';
import PropTypes from 'prop-types';
// import { getMealById } from '../helpers/TheMealDBAPI';

function FoodDetails() {
  // const [foodDetails, setFoodDetails] = useState({});

  // useEffect(() => {
  //   const { match: { params: { id } } } = props;
  //   const getFood = async () => { // pegando os dados na API
  //     const response = await getMealById(id); // dados totais
  //     setFoodDetails(response);
  //     return response;
  //   };
  //   getFood();
  // }, [props]);

  // useEffect(() => {
  // const { match: { params: { id } } } = props;
  // const getFood = async () => { // pegando os dados na API
  //   const response = await getMealById(id); // dados totais
  //   // setFoodDetails(response);
  //   console.log(response);
  //   return response;
  // };
  // getFood();
  // }, [props]);

  return (
    <div>
      {/* { foodDetails[0].idMeal} */}
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default FoodDetails;
