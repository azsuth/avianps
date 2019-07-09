import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Bird from 'app/model/bird';

import 'app/styles/BirdRating.scss';

const BirdRating = ({ bird, onClickSubmit, existingScore }) => {
  const { id, name } = bird;
  const { id: scoreId } = existingScore;

  const [rating, setRating] = useState(existingScore.rating);
  const [comment, setComment] = useState(existingScore.comment);

  const renderRatingButtons = () => {
    const ratings = [...Array(11).keys()];

    return (
      <div className="BirdRating__buttons">
        {ratings.map(num => {
          let className = 'BirdRating__button btn btn--round';

          if (num === rating) {
            if (num < 7) {
              className += ' btn--selected-negative';
            } else if (num < 9) {
              className += ' btn--selected';
            } else {
              className += ' btn--selected-positive';
            }
          }

          return (
            <button
              className={className}
              key={num}
              onClick={() => setRating(num)}
            >
              {num}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="BirdRating">
      <header>
        <h1 className="BirdRating__header">
          {scoreId ? `Update your ${name} rating` : `Rate the ${name}`}
        </h1>
        <h2 className="BirdRating__sub-header">
          How likely is it that you would recommend this bird to a friend or
          collegue?
        </h2>
      </header>

      <main>
        {renderRatingButtons()}

        <label className="BirdRating__comments">
          Comments:
          <textarea
            className="BirdRating__comments-text"
            value={comment}
            onChange={event => setComment(event.target.value)}
          />
        </label>

        <button
          className="BirdRating__submit-button btn"
          disabled={!rating}
          onClick={() => onClickSubmit(id, rating, comment)}
        >
          {scoreId ? 'Update Rating' : 'Submit Rating'}
        </button>
      </main>
    </div>
  );
};

BirdRating.propTypes = {
  bird: PropTypes.instanceOf(Bird).isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  existingScore: PropTypes.object
};

export default BirdRating;
