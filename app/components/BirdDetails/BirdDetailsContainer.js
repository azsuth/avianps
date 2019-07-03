import React from 'react';
import { connect } from 'react-redux';

import BirdDetails from './BirdDetails';

const BirdDetailsContainer = ({ match, birdsById }) => {
  const birdId = match.params.birdId;
  const bird = birdsById[birdId];

  return <BirdDetails {...{ bird }} />;
};

const mapStateToProps = ({ Birds }) => ({
  birdsById: Birds.birdsById
});

export default connect(
  mapStateToProps,
  {}
)(BirdDetailsContainer);
