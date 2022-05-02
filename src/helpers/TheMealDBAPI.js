export const getByIngredients = async (ingredient) => {
  const urlIngredients = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(urlIngredients);
  const data = await response.json();
  const results = data.meals;

  console.log(results);
  return results;
};

export const getByName = async (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.meals;

  console.log(results);
  return results;
};

export const getByFirstLetter = async (firstLetter) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.meals;

  console.log(results);
  return results;
};

export const getRecipes = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  const results = data.meals;

  console.log(results);
  return results;
};

export const getMealCategories = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const data = await response.json();
  const results = data.meals;

  console.log(results);
  return results;
};

export const getMealById = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.meals;

  console.log(results);
  return results;
};

export const getRandomMeal = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(url);
  const data = await response.json();
  const results = data.meals;

  console.log(results);
  return results;
};

export const getByIngredientsList = async () => {
  const urlIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(urlIngredients);
  const data = await response.json();
  const results = data.meals;
  return results;
};

export const getNationalitiesList = async () => {
  const urlIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await fetch(urlIngredients);
  const data = await response.json();
  const results = data.meals;
  return results;
};

export const getNationalitiesRecipes = async (national) => {
  const urlIngredients = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${national}`;
  const response = await fetch(urlIngredients);
  const data = await response.json();
  const results = data.meals;
  console.log(results);
  return results;
};
