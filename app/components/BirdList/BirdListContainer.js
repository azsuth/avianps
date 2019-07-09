import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  navigateToDetails,
  navigateToRating,
  sortByChanged
} from 'app/actions/bird';

import BirdList from 'app/components/BirdList/BirdList';

const BirdListContainer = ({
  birds,
  sortBy,
  navigateToDetails,
  navigateToRating,
  sortByChanged,
  history
}) => {
  const onClickDetails = birdId => {
    navigateToDetails(birdId, history);
  };

  const onClickRate = birdId => {
    navigateToRating(birdId, history);
  };

  return (
    <BirdList
      {...{
        birds: sortBirds(birds, sortBy),
        onClickDetails,
        onClickRate,
        sortByChanged,
        sortBy,
        sortTypes: [
          { key: 'name', value: 'Name' },
          { key: 'score', value: 'BPS' },
          { key: 'commentCount', value: 'Comment Count' }
        ]
      }}
    />
  );
};

export const sortBirds = (birds, sortBy) => {
  const sortedBirds = Array.from(birds);
  sortedBirds.sort((bird1, bird2) => {
    if (sortBy === 'name') {
      if (bird1.name < bird2.name) {
        return -1;
      }
      if (bird1.name > bird2.name) {
        return 1;
      }
      return 0;
    }

    if (sortBy === 'score') {
      return bird2.bps - bird1.bps;
    }

    if (sortBy === 'commentCount') {
      return bird2.scores.length - bird1.scores.length;
    }

    return 0;
  });

  return sortedBirds;
};

const mapStateToProps = ({ Birds }) => ({
  birds: Birds.birds,
  sortBy: Birds.sortBy
});

export default connect(
  mapStateToProps,
  { navigateToDetails, navigateToRating, sortByChanged }
)(BirdListContainer);
