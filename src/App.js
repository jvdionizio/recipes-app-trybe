import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DoneRecipes from './pages/DoneRecipes';
import DrinkInProgress from './pages/DrinkInProgress';
import Drinks from './pages/Drinks';
import DrinksDetails from './pages/DrinksDetails';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIng from './pages/ExploreDrinksIng';
import ExploreDrinksNat from './pages/ExploreDrinksNat';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIng from './pages/ExploreFoodsIng';
import ExploreFoodsNat from './pages/ExploreFoodsNat';
import Favorites from './pages/Favorites';
import FoodDetails from './pages/FoodDetails';
import FoodInProgress from './pages/FoodInProgress';
import Foods from './pages/Foods';
import Login from './pages/Login';
import Profile from './pages/Profile';

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
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreFoodsIng } />
        <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinksIng } />
        <Route exact path="/explore/foods/nationalities" component={ ExploreFoodsNat } />
        <Route
          exact
          path="/explore/drinks/nationalities"
          component={ ExploreDrinksNat }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </div>
  );
}

export default App;
