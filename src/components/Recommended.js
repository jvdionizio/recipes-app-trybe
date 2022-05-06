import React, { useState } from 'react';

function Recommended() {
  const [recommended, setRecommended] = useState([
    'Recomendados1',
    'Recomendados2',
    'Recomendados3',
    'Recomendados4',
    'Recomendados5',
    'Recomendados6',
  ]);
  console.log(setRecommended);
  return (
    <div>
      { recommended.map((recipe, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { recipe }
        </div>
      )) }
    </div>
  );
}

export default Recommended;
