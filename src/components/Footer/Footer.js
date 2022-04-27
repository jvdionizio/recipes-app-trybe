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
      >
        <img src={ drinkImg } alt="drink" data-testid="drinks-bottom-btn" />
      </Link>
      <Link
        to="/explore"
      >
        <img src={ exploreImg } alt="explore" data-testid="explore-bottom-btn" />
      </Link>
      <Link
        to="/foods"
      >
        <img src={ mealImg } alt="meal" data-testid="food-bottom-btn" />
      </Link>
    </div>
  );
}

export default Footer;
