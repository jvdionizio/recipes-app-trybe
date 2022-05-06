import React from 'react';
import PropTypes from 'prop-types';
import style from './StyleList.module.css';

function RenderList({ list }) {
  return (
    <div>
      {list && (
        <ul className={ style.list }>
          { list.map((item, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item }
            </li>
          )) }
        </ul>)}
    </div>
  );
}

RenderList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default RenderList;
