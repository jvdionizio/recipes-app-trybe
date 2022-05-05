const conditional = (foodDetails) => {
  let obj = {};
  console.log(foodDetails);
  const test = foodDetails[0].strDrink === undefined
    ? 'food' : 'drink';
  if (test === 'food') {
    const { strMealThumb, strMeal, strCategory, idMeal,
      strArea } = foodDetails[0];
    obj = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
  }

  if (test === 'drink') {
    const { strDrinkThumb, strDrink, strCategory,
      idDrink, strAlcoholic } = foodDetails[0];
    // console.log(foodDetails[0]);
    obj = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
  }
  return obj;
};
export default conditional;
