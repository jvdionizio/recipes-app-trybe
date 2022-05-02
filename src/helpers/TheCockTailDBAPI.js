export const getByIngredientsDrink = async (ingredient) => {
  const urlIngredients = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(urlIngredients);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};

export const getByNameDrink = async (name) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};

export const getByFirstLetterDrink = async (firstLetter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};

export const getDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};

export const getDrinkCategories = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};

export const getDrinkById = async (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};

export const getRandomDrink = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const response = await fetch(url);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};

export const getDrinkByCategory = async (category) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.drinks;

  console.log(results);
  return results;
};
