import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route path="/foods/:id" component={ FoodDetails } />
        <Route path="/drinks/:id" component={ DrinksDetails } />
        <Route path="/foods/:id/in-progress" component={ FoodInProgress } />
        <Route path="/drinks/:id/in-progress" component={ DrinkInProgress } />
        <Route path="/explore" component={ Explore } />
        <Route path="/explore/foods" component={ ExploreFoods } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route path="/explore/foods/ingredients" component={ ExploreFoodsIng } />
        <Route path="/explore/drinks/ingredients" component={ ExploreDrinksIng } />
        <Route path="/explore/foods/nationalities" component={ ExploreFoodsNat } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </div>
  );
}

export default App;
