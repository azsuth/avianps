import React from 'react';
import PropTypes from 'prop-types';

import 'app/styles/BirdScoreRow.scss';

const BirdScoreRow = ({ score }) => {
  const { rating, comment } = score;

  return (
    <div className="BirdScoreRow">
      <span className="BirdScoreRow__score">{rating}</span>
      <span className="BirdScoreRow__comment">{comment}</span>
    </div>
  );
};

BirdScoreRow.propTypes = {
  score: PropTypes.object.isRequired
};

export default BirdScoreRow;
