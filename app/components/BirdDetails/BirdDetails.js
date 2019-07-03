import React from 'react';
import PropTypes from 'prop-types';

import BirdScoreRow from 'app/components/BirdDetails/BirdScoreRow';

import 'app/styles/BirdDetails.scss';

const BirdDetails = ({ bird }) => {
  const {
    name,
    scientificName,
    imageUrl,
    description,
    conservationStatus,
    scores
  } = bird;

  const renderBirdScores = () => {
    if (scores && scores.length > 0) {
      return scores.map(score => (
        <div className="BirdDetailsScores__row" key={score.id}>
          <BirdScoreRow score={score} />
        </div>
      ));
    }

    return (
      <span className="BirdDetailsScores__empty">No reviews yet</span>
    )
  };

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
        <span className="BirdDetailsMain__conservation-status">
          {conservationStatus}
        </span>

        <h2 className="BirdDetailsMain__description-label BirdDetailsMain__separator">
          Description
        </h2>
        <p className="BirdDetailsMain__description">{description}</p>

        <h2 className="BirdDetailsMain__ratings-label BirdDetailsMain__separator">
          Ratings
        </h2>

        <div className="BirdDetailsScores">{renderBirdScores()}</div>
      </main>
    </div>
  );
};

BirdDetails.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdDetails;
