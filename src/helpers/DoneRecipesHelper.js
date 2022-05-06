const finishRecipe = (recipeDetails) => {
  let obj = {};
  const testType = recipeDetails && recipeDetails[0].strDrink === undefined
    ? 'food' : 'drink';
  if (testType === 'food') {
    const { strMealThumb, strMeal, strCategory, idMeal,
      strArea, strTags } = recipeDetails[0];
    const tags = strTags.split(',');
    console.log(tags);
    obj = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
      doneDate: new Date(),
      tag: tags,
    };
  }
  if (testType === 'drink' && recipeDetails) {
    const { strDrinkThumb, strDrink, strCategory,
      idDrink, strAlcoholic, strTags } = recipeDetails[0];
    console.log(strTags);
    // console.log(foodDetails[0]);
    const tags = strTags && strTags.split(',');
    obj = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
      doneDate: new Date(),
      tag: tags,
    };
  }
  return obj;
};

export default finishRecipe;
