import React from 'react';
import PropTypes from 'prop-types';

import 'app/styles/BirdScoreRow.scss';

const BirdScoreRow = ({ score }) => {
  const { rating, comment } = score;

  const renderComment = () => {
    if (comment) {
      return <span className="BirdScoreRow__comment">{comment}</span>;
    }

    return <span className="BirdScoreRow__comment BirdScoreRow__comment--empty">No comment</span>
  };

  return (
    <div className="BirdScoreRow">
      <span className="BirdScoreRow__score">{rating}</span>
      {renderComment()}
    </div>
  );
};

BirdScoreRow.propTypes = {
  score: PropTypes.object.isRequired
};

export default BirdScoreRow;
