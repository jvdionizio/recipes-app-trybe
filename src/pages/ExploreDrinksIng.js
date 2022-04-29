import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getByIngredientsListDrink } from '../helpers/TheCockTailDBAPI';

function ExploreDrinksing() {
  const [foodsIng, setFoodsIng] = useState([]);
  console.log(foodsIng);
  const DOZE = 12;
  useEffect(() => {
    const getIngredients = async () => {
      const response = await getByIngredientsListDrink();
      const response12 = response.slice(0, DOZE).map((ing) => {
        const obj = {
          name: ing.strIngredient1,
          image: `https://www.thecocktaildb.com/images/ingredients/${ing.strIngredient1}-Small.png`,
        };
        return obj;
      });
      console.log('todos os ingredientes', response12);
      setFoodsIng(response12);

      return response.slice(0, DOZE);
    };
    getIngredients();
  }, []);
  return (
    <div>
      <Header headerTitle="Explore Ingredients" noSearch />
      {
        foodsIng.map(({ name, image }, index) => {
          console.log(name, image);
          return (
            <div key={ index } data-testid={ `${index}-ingredient-card` }>
              <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
              <p data-testid={ `${index}-card-name` }>{ name }</p>
            </div>
          );
        })
      }
      <Footer />
    </div>
  );
}

export default ExploreDrinksing;
