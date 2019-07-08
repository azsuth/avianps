import { getBirdsService } from 'app/services/bird';

import { NEW_BIRDS } from 'app/actions/types';

export const getBirds = (service = getBirdsService) => dispatch => {
  service().then(birds => {
    dispatch({
      type: NEW_BIRDS,
      payload: birds
    });
  });
};

export const navigateToDetails = (birdId, history) => () => {
  history.push(`/${birdId}`);
};

export const navigateToRating = (birdId, history) => () => {
  history.push(`/${birdId}/rate`);
};
