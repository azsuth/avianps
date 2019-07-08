import React from 'react';
import { connect } from 'react-redux';

import { rateBird } from 'app/actions/bird';

import BirdRating from 'app/components/BirdRating/BirdRating';

const BirdRatingContainer = ({ match, birdsById, rateBird, history }) => {
  const birdId = match.params.birdId;
  const bird = birdsById[birdId];

  const onClickSubmit = (birdId, rating, comment) =>
    rateBird(birdId, rating, comment, history);

  return <BirdRating {...{ bird, onClickSubmit }} />;
};

const mapStateToProps = ({ Birds }) => ({
  birdsById: Birds.birdsById
});

export default connect(
  mapStateToProps,
  { rateBird }
)(BirdRatingContainer);
