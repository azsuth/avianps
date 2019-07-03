import React from 'react';

const BirdDetails = ({ bird }) => {
  const { name } = bird;

  return (
    <div className="BirdDetails">
      <h1>{name}</h1>
    </div>
  );
};

export default BirdDetails;
