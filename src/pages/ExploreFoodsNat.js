import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getNationalitiesList,
  getRecipes, getNationalitiesRecipes } from '../helpers/TheMealDBAPI';

function ExploreFoodsNat() {
  const DOZE = 12;
  const [foodsNat, setFoodsNat] = useState([]);
  const [foodToRender, setfoodToRender] = useState([]);
  console.log(foodToRender);

  useEffect(() => {
    const getNationalities = async () => {
      const response = await getNationalitiesList();
      const responseNationalities = response.map((nat) => (nat.strArea));
      setFoodsNat(responseNationalities);
      const getAllRecipes = await getRecipes();
      const response12 = getAllRecipes.slice(0, DOZE).map((ing) => {
        const obj = {
          id: ing.idMeal,
          name: ing.strMeal,
          image: ing.strMealThumb,
        };
        return obj;
      });
      setfoodToRender(response12);
      return responseNationalities;
    };
    getNationalities();
  }, []);

  const handleNationality = async (event) => {
    const national = event.target.value;
    const response = national === 'All'
      ? await getRecipes()
      : await getNationalitiesRecipes(national);
    // console.log(response);
    const response12 = response.slice(0, DOZE).map((ingr) => {
      const obj = {
        id: ingr.idMeal,
        name: ingr.strMeal,
        image: ingr.strMealThumb,
      };
      return obj;
    });
    setfoodToRender(response12);
  };

  return (
    <div>
      <Header headerTitle="Explore Nationalities" />
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ (event) => handleNationality(event) }
      >
        <option
          data-testid="All-option"
          value="All"
        >
          All
        </option>
        {
          foodsNat.map((nat, index) => (
            <option
              key={ index }
              value={ nat }
              data-testid={ `${nat}-option` }
            >
              { nat }
            </option>
          ))
        }
      </select>
      <h1>Interva</h1>
      {
        foodToRender.map(({ id, name, image }, index) => (
          // <div
          //   key={ index }
          // >
          <Link
            key={ index }
            data-testid={ `${index}-recipe-card` }
            to={ `/foods/${id}` }
          >
            <img
              src={ image }
              data-testid={ `${index}-card-img` }
              alt="food"
              width="100px"
            />
            <p data-testid={ `${index}-card-name` }>{ name }</p>
          </Link>
        // </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default ExploreFoodsNat;
