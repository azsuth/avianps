import React from 'react';
import { connect } from 'react-redux';

import { rateBird, updateRating } from 'app/actions/bird';

import BirdRating from 'app/components/BirdRating/BirdRating';

const BirdRatingContainer = ({
  match,
  birdsById,
  rateBird,
  updateRating,
  history
}) => {
  const birdId = match.params.birdId;
  const scoreId = match.params.scoreId;

  const bird = birdsById[birdId];
  const existingScore = bird.scores.find(score => score.id === scoreId);

  const onClickSubmit = (birdId, rating, comment) => {
    if (existingScore.id) {
      updateRating(existingScore.id, rating, comment, history);
    } else {
      rateBird(birdId, rating, comment, history);
    }
  };

  return <BirdRating {...{ bird, onClickSubmit, existingScore }} />;
};

const mapStateToProps = ({ Birds }) => ({
  birdsById: Birds.birdsById
});

export default connect(
  mapStateToProps,
  { rateBird, updateRating }
)(BirdRatingContainer);
