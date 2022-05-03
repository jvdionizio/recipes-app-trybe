import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getByIngredientsList } from '../helpers/TheMealDBAPI';
// import { Link } from 'react-router-dom';

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

  const handleClick = (name) => {
    console.log('handrle click ingedients foods', name);
    const response = 'response';
    console.log(response);
  };

  return (
    <div>
      <Header headerTitle="Explore Ingredients" noSearch />
      {
        foodsIng.map(({ name, image }, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => handleClick(name) }
          >
            <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` }>{ name }</p>
          </button>
        ))
      }
      <Footer />
    </div>
  );
}

export default ExploreFoodsIng;
