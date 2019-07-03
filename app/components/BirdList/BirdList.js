import React from 'react';
import PropTypes from 'prop-types';

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

BirdList.propTypes = {
  birds: PropTypes.array.isRequired,
  onClickDetails: PropTypes.func.isRequired
};

export default BirdList;
