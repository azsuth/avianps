import React from 'react';
import PropTypes from 'prop-types';

import 'app/styles/BirdRow.scss';

const BirdRow = ({ bird, onClickDetails }) => {
  const { id, name, scientificName, conservationStatus, imageUrl } = bird;

  return (
    <div className="BirdRow">
      <img className="BirdRow__image" src={imageUrl} />

      <div className="BirdRowContent">
        <div className="BirdRowName">
          <span className="BirdRowName__simple">{name}</span>
          <span className="BirdRowName__scientific">({scientificName})</span>
        </div>

        <span className="BirdRowContent__endangered">{conservationStatus}</span>
      </div>

      <button
        className="BirdRow__details-button"
        onClick={() => onClickDetails(id)}
      >
        Details
      </button>
    </div>
  );
};

BirdRow.propTypes = {
  bird: PropTypes.object.isRequired,
  onClickDetails: PropTypes.func.isRequired
};

export default BirdRow;
