import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function Explore() {
  return (
    <div>
      <Header headerTitle="Explore" noSearch />
      <button
        type="button"
        data-testid="explore-foods"
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
      >
        Explore Drinks
      </button>
      <Footer />
    </div>
  );
}

export default Explore;
