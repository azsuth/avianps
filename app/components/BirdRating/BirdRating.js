import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Bird from 'app/model/bird';

import 'app/styles/BirdRating.scss';

const BirdRating = ({ bird, onClickSubmit }) => {
  const { id, name } = bird;

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');

  const renderRatingButtons = () => {
    const ratings = [...Array(11).keys()];

    return (
      <div className="BirdRating__buttons">
        {ratings.map(num => {
          let className = 'BirdRating__button';

          if (num === rating) {
            className += ' BirdRating__button--selected';

            if (num < 7) {
              className += '-negative';
            } else if (num < 9) {
              className += '-neutral';
            } else {
              className += '-positive';
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
        <h1 className="BirdRating__header">Rate the {name}</h1>
        <h2 className="BirdRating__sub-header">On a scale from 0 to 10</h2>
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
          className="BirdRating__submit-button"
          onClick={() => onClickSubmit(id, rating, comment)}
        >
          Submit Rating
        </button>
      </main>
    </div>
  );
};

BirdRating.propTypes = {
  bird: PropTypes.instanceOf(Bird).isRequired,
  onClickSubmit: PropTypes.func.isRequired
};

export default BirdRating;
