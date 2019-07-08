import { getBirdsService, createScoreService } from 'app/services/bird';

import { NEW_BIRDS, LOADING, ERROR } from 'app/actions/types';

export const getBirds = (service = getBirdsService) => dispatch => {
  return new Promise(resolve => {
    service()
      .then(birds => {
        dispatch({
          type: NEW_BIRDS,
          payload: birds
        });

        resolve();
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  });
};

export const rateBird = (
  birdId,
  rating,
  comment,
  history,
  service = createScoreService
) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  service(birdId, rating, comment)
    .then(() => dispatch(getBirds()))
    .then(() => history.goBack())
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};

export const navigateToDetails = (birdId, history) => () => {
  history.push(`/${birdId}`);
};

export const navigateToRating = (birdId, history) => () => {
  history.push(`/${birdId}/rate`);
};
