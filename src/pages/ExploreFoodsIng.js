import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getByIngredientsList } from '../helpers/TheMealDBAPI';

function ExploreFoodsIng() {
  const [foodsIng, setFoodsIng] = useState([]);
  const DOZE = 12;
  useEffect(() => {
    const getIngredients = async () => {
      const response = await getByIngredientsList();
      const response12 = response.slice(0, DOZE).map((ing) => {
        const obj = {
          name: ing.strIngredient,
          image: `https://www.themealdb.com/images/ingredients/${ing.strIngredient}-Small.png`,
        };
        return obj;
      });
      setFoodsIng(response12);
      return response.slice(0, DOZE);
    };
    getIngredients();
  }, []);

  return (
    <div>
      <Header headerTitle="Explore Ingredients" noSearch />
      {
        foodsIng.map(({ name, image }, index) => (
          <div key={ index } data-testid={ `${index}-ingredient-card` }>
            <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` }>{ name }</p>
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default ExploreFoodsIng;
