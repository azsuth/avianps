import React from 'react';
import PropTypes from 'prop-types';

import Bird from 'app/model/bird';

const BirdRating = ({ bird }) => {
  const { name } = bird;

  return (
    <div className="BirdRating">
      How would you rate {name} on a scale from 1 to 10?
    </div>
  );
};

BirdRating.propTypes = {
  bird: PropTypes.instanceOf(Bird).isRequired
};

export default BirdRating;
