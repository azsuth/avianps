import React from 'react';
import { connect } from 'react-redux';

import { rateBird } from 'app/actions/bird';

import BirdRating from 'app/components/BirdRating/BirdRating';

const BirdRatingContainer = ({ match, birdsById, rateBird }) => {
  const birdId = match.params.birdId;
  const bird = birdsById[birdId];

  return <BirdRating {...{ bird, onClickSubmit: rateBird }} />;
};

const mapStateToProps = ({ Birds }) => ({
  birdsById: Birds.birdsById
});

export default connect(
  mapStateToProps,
  { rateBird }
)(BirdRatingContainer);
