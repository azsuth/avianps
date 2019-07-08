import React from 'react';
import { connect } from 'react-redux';

import BirdRating from 'app/components/BirdRating/BirdRating';

const BirdRatingContainer = ({ match, birdsById }) => {
  const birdId = match.params.birdId;
  const bird = birdsById[birdId];

  return <BirdRating {...{ bird }} />;
};

const mapStateToProps = ({ Birds }) => ({
  birdsById: Birds.birdsById
});

export default connect(
  mapStateToProps,
  {}
)(BirdRatingContainer);
