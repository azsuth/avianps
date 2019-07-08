import React from 'react';
import { connect } from 'react-redux';

import { navigateToRating } from 'app/actions/bird';

import BirdDetails from 'app/components/BirdDetails/BirdDetails';

const BirdDetailsContainer = ({
  match,
  birdsById,
  navigateToRating,
  history
}) => {
  const birdId = match.params.birdId;
  const bird = birdsById[birdId];

  const onClickRate = birdId => navigateToRating(birdId, history);

  return <BirdDetails {...{ bird, onClickRate }} />;
};

const mapStateToProps = ({ Birds }) => ({
  birdsById: Birds.birdsById
});

export default connect(
  mapStateToProps,
  { navigateToRating }
)(BirdDetailsContainer);
