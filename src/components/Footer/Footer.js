import React from 'react';
import { Link } from 'react-router-dom';
import drinkImg from '../../images/drinkIcon.svg';
import exploreImg from '../../images/exploreIcon.svg';
import mealImg from '../../images/mealIcon.svg';
import FooterStyle from '../../styles/Footer-style';

function Footer() {
  return (
    <FooterStyle data-testid="footer">
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
    </FooterStyle>
  );
}

export default Footer;
