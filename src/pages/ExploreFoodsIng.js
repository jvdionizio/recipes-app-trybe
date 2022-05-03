import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { getByIngredients, getByIngredientsList } from '../helpers/TheMealDBAPI';
import Context from '../context/Context';
// import { Link } from 'react-router-dom';

function ExploreFoodsIng({ history }) {
  const [foodsIng, setFoodsIng] = useState([]);
  const { setFoodReturns } = useContext(Context);
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

  const handleClick = async (name) => {
    console.log('handrle click ingedients foods', name);
    const response = await getByIngredients(name);
    console.log(response);
    setFoodReturns(response);
    history.push('/foods');
  };

  return (
    <div>
      <Header headerTitle="Explore Ingredients" noSearch />
      {
        foodsIng.map(({ name, image }, index) => (
          <div
            key={ index }
            type="button"
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => handleClick(name) }
            onKeyDown={ () => handleClick(name) }
            role="button"
            tabIndex="0"
          >
            <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` }>{ name }</p>
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

ExploreFoodsIng.propTypes = {
  history: PropTypes.func.isRequired,
};

export default ExploreFoodsIng;
