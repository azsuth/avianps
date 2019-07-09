import React from 'react';
import { connect } from 'react-redux';

import {
  navigateToRating,
  navigateToUpdateRating,
  deleteRating,
  updateRating
} from 'app/actions/bird';

import BirdDetails from 'app/components/BirdDetails/BirdDetails';

const BirdDetailsContainer = ({
  match,
  birdsById,
  navigateToRating,
  navigateToUpdateRating,
  deleteRating,
  history
}) => {
  const birdId = match.params.birdId;
  const bird = birdsById[birdId];

  const onClickRate = birdId => navigateToRating(birdId, history);

  const onClickUpdateRating = (birdId, ratingId) =>
    navigateToUpdateRating(birdId, ratingId, history);

  return (
    <BirdDetails
      {...{
        bird,
        onClickRate,
        onClickDeleteRating: deleteRating,
        onClickUpdateRating
      }}
    />
  );
};

const mapStateToProps = ({ Birds }) => ({
  birdsById: Birds.birdsById
});

export default connect(
  mapStateToProps,
  { navigateToRating, navigateToUpdateRating, deleteRating, updateRating }
)(BirdDetailsContainer);
