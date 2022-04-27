import React from 'react';
import { Link } from 'react-router-dom';
import drinkImg from '../../images/drinkIcon.svg';
import mealImg from '../../images/mealIcon.svg';
import exploreImg from '../../images/exploreIcon.svg';
import style from './Footer.module.css';

function Footer() {
  return (
    <div data-testid="footer" className={ style.footerContainer }>
      <Link
        to="/drinks"
        data-testid="drinks-bottom-btn"
      >
        <img src={ drinkImg } alt="drink" />
      </Link>
      <Link
        to="/explore"
        data-testid="explore-bottom-btn"
      >
        <img src={ exploreImg } alt="explore" />
      </Link>
      <Link
        to="/foods"
        data-testid="food-bottom-btn"
      >
        <img src={ mealImg } alt="meal" />
      </Link>
    </div>
  );
}

export default Footer;
