import React from 'react';
import PropTypes from 'prop-types';

import 'app/styles/BirdScoreRow.scss';

const BirdScoreRow = ({ score, onClickDeleteRating }) => {
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
          <button className="btn" onClick={() => onClickDeleteRating(id)}>
            Delete Rating
          </button>
        </span>
      </div>
    </div>
  );
};

BirdScoreRow.propTypes = {
  score: PropTypes.object.isRequired,
  onClickDeleteRating: PropTypes.func.isRequired
};

export default BirdScoreRow;
