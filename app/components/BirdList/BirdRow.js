import React from 'react';
import PropTypes from 'prop-types';

import BPS from 'app/components/common/BPS';
import Bird from 'app/model/bird';

import 'app/styles/BirdRow.scss';

const BirdRow = ({ bird, onClickDetails, onClickRate }) => {
  const { id, name, scientificName, conservationStatus, imageUrl, bps } = bird;

  return (
    <div className="BirdRow">
      <div className="BirdRowContent">
        <img className="BirdRowContent__image" src={imageUrl} />

        <div className="BirdRowRightContent">
          <div className="BirdRowName">
            <span className="BirdRowName__simple">{name}</span>
            <span className="BirdRowName__scientific">({scientificName})</span>
          </div>

          <span className="BirdRowRightContent__conservation-status">
            {conservationStatus}
          </span>

          <div className="BirdRowRightContent__bps">
            <BPS bps={bps} />
          </div>
        </div>
      </div>

      <div className="BirdRowActions">
        <button
          className="BirdRow__details-button btn"
          onClick={() => onClickRate(id)}
        >
          Rate
        </button>

        <button
          className="BirdRow__details-button btn"
          onClick={() => onClickDetails(id)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

BirdRow.propTypes = {
  bird: PropTypes.instanceOf(Bird).isRequired,
  onClickDetails: PropTypes.func.isRequired,
  onClickRate: PropTypes.func.isRequired
};

export default BirdRow;
