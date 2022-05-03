import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import Context from '../context/Context';
import { getByIngredientsListDrink,
  getByIngredientsDrink } from '../helpers/TheCockTailDBAPI';

function ExploreDrinksIng({ history }) {
  const [foodsIng, setFoodsIng] = useState([]);
  const { setDrinkReturns } = useContext(Context);
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

  const handleClick = async (name) => {
    console.log('handrle click ingedients foods', name);
    const response = await getByIngredientsDrink(name);
    console.log(response);
    setDrinkReturns(response);
    history.push('/drinks');
  };

  return (
    <div>
      <Header headerTitle="Explore Ingredients" noSearch />
      {
        foodsIng.map(({ name, image }, index) => {
          console.log(name, image);
          return (
            <button
              type="button"
              key={ index }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => handleClick(name) }
            >
              <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
              <p data-testid={ `${index}-card-name` }>{ name }</p>
            </button>
          );
        })
      }
      <Footer />
    </div>
  );
}

ExploreDrinksIng.propTypes = {
  history: PropTypes.func.isRequired,
};

export default ExploreDrinksIng;
