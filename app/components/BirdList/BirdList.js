import React from 'react';

import BirdRow from './BirdRow';

import 'app/styles/BirdList.scss';

const BirdList = ({ birds, onClickDetails }) => {
  return (
    <div className="BirdList">
      <h1>Birds of New Zealand</h1>

      {birds.map(bird => (
        <div className="BirdList__row" key={bird.id}>
          <BirdRow bird={bird} onClickDetails={onClickDetails} />
        </div>
      ))}
    </div>
  );
};

export default BirdList;
