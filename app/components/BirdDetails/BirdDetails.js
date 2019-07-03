import React from 'react';
import PropTypes from 'prop-types';

const BirdDetails = ({ bird }) => {
  const { name } = bird;

  return (
    <div className="BirdDetails">
      <h1>{name}</h1>
    </div>
  );
};

BirdDetails.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdDetails;
