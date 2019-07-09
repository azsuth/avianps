import React from 'react';
import PropTypes from 'prop-types';

import 'app/styles/BirdScoreRow.scss';

const BirdScoreRow = ({
  birdId,
  score,
  onClickDeleteRating,
  onClickUpdateRating
}) => {
  const { id, rating, comment } = score;

  const renderComment = () => {
    if (comment) {
      return <span className="BirdScoreRow__comment">{comment}</span>;
    }

    return (
      <span className="BirdScoreRow__comment BirdScoreRow__comment--empty">
        No comment
      </span>
    );
  };

  return (
    <div className="BirdScoreRow">
      <span className="BirdScoreRow__score">{rating}</span>
      <div className="BirdScoreRow__comment-container">
        {renderComment()}
        <span className="BirdScoreRow__actions">
          <button
            className="btn"
            onClick={() => onClickUpdateRating(birdId, id)}
          >
            Update
          </button>

          <button className="btn" onClick={() => onClickDeleteRating(id)}>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

BirdScoreRow.propTypes = {
  birdId: PropTypes.string.isRequired,
  score: PropTypes.object.isRequired,
  onClickDeleteRating: PropTypes.func.isRequired,
  onClickUpdateRating: PropTypes.func.isRequired
};

export default BirdScoreRow;
