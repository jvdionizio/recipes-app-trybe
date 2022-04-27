import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DoneRecipes from './pages/DoneRecipes';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIng from './pages/ExploreFoodsIng';
import ExploreDrinksIng from './pages/ExploreDrinksIng';
import ExploreFoodsNat from './pages/ExploreFoodsNat';
import FoodDetails from './pages/FoodDetails';
import DrinksDetails from './pages/DrinksDetails';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/drinks/:id" component={ DrinksDetails } />
        <Route exact path="/foods/:id/in-progress" component={ FoodInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreFoodsIng } />
        <Route path="/explore/drinks/ingredients" component={ ExploreDrinksIng } />
        <Route exact path="/explore/foods/nationalities" component={ ExploreFoodsNat } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </div>
  );
}

export default App;
