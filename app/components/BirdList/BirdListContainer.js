import React from 'react';
import { connect } from 'react-redux';

import { navigateToDetails } from 'app/actions/bird';

import BirdList from './BirdList';

const BirdListContainer = ({ birds, navigateToDetails, history }) => {
  const onClickDetails = birdId => {
    navigateToDetails(birdId, history);
  };

  return <BirdList {...{ birds, onClickDetails }} />;
};

const mapStateToProps = ({ Birds }) => ({
  birds: Birds.birds
});

export default connect(
  mapStateToProps,
  { navigateToDetails }
)(BirdListContainer);
