import React from 'react';
import PropTypes from 'prop-types';

import Bird from 'app/model/bird';

import BPS from 'app/components/common/BPS';
import BirdScoreRow from 'app/components/BirdDetails/BirdScoreRow';

import 'app/styles/BirdDetails.scss';

const BirdDetails = ({
  bird,
  onClickRate,
  onClickDeleteRating,
  onClickUpdateRating
}) => {
  const {
    id,
    name,
    scientificName,
    imageUrl,
    description,
    conservationStatus,
    scores,
    bps
  } = bird;

  const renderBirdScores = () => {
    if (scores && scores.length > 0) {
      return scores.map(score => (
        <div className="BirdDetailsScores__row" key={score.id}>
          <BirdScoreRow
            birdId={id}
            score={score}
            onClickDeleteRating={onClickDeleteRating}
            onClickUpdateRating={onClickUpdateRating}
          />
        </div>
      ));
    }

    return <span className="BirdDetailsScores__empty">No reviews yet</span>;
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
        <h2 className="BirdDetailsMain__info-label BirdDetails__separator">
          Info
        </h2>
        <div className="BirdDetailsInfo">
          <BPS bps={bps} condensed={false} />

          <div className="BirdDetailsInfo__conservation-container">
            <span className="BirdDetailsInfo__conservation-status-label">
              Status:
            </span>
            <span className="BirdDetailsInfo__conservation-status">
              {conservationStatus}
            </span>
          </div>
        </div>

        <h2 className="BirdDetailsMain__description-label BirdDetails__separator">
          Description
        </h2>
        <p className="BirdDetailsMain__description">{description}</p>

        <div className="BirdDetailsMain__ratings-container BirdDetails__separator">
          <h2 className="BirdDetailsMain__ratings-label">Ratings</h2>

          <button
            className="BirdDetailsMain__rate-button btn"
            onClick={() => onClickRate(id)}
          >
            Rate
          </button>
        </div>

        <div className="BirdDetailsScores">{renderBirdScores()}</div>
      </main>
    </div>
  );
};

BirdDetails.propTypes = {
  bird: PropTypes.instanceOf(Bird).isRequired,
  onClickRate: PropTypes.func.isRequired,
  onClickDeleteRating: PropTypes.func.isRequired,
  onClickUpdateRating: PropTypes.func.isRequired
};

export default BirdDetails;
