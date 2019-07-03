import React from 'react';
import PropTypes from 'prop-types';

import 'app/styles/BirdDetails.scss';

const BirdDetails = ({ bird }) => {
  const { name, scientificName, imageUrl, description, conservationStatus } = bird;

  return (
    <div className="BirdDetails">
      <header className="BirdDetailsHeader">
        <img className="BirdDetailsHeader__image" src={imageUrl} />
        <div className="BirdDetailsHeader__screen" />

        <div className="BirdDetailsName">
          <h1 className="BirdDetailsName__simple">{name}</h1>
          <h2 className="BirdDetailsName__scientific">{scientificName}</h2>
        </div>
      </header>

      <main className="BirdDetailsMain">
        <span className="BirdDetailsMain__conservation-status">{conservationStatus}</span>
        <p className="BirdDetailsMain__description">{description}</p>
      </main>
    </div>
  );
};

BirdDetails.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdDetails;
