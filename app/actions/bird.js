import {
  getBirdsService,
  createScoreService,
  deleteScoreService,
  updateScoreService
} from 'app/services/bird';

import { NEW_BIRDS, LOADING, ERROR, SORT_BY_CHANGED } from 'app/actions/types';

export const sortByChanged = sortBy => ({
  type: SORT_BY_CHANGED,
  payload: sortBy
});

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

export const deleteRating = (id, service = deleteScoreService) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  service(id)
    .then(() => dispatch(getBirds()))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};

export const updateRating = (
  id,
  rating,
  comment,
  history,
  service = updateScoreService
) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  service(id, rating, comment)
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

export const navigateToUpdateRating = (birdId, ratingId, history) => () => {
  history.push(`/${birdId}/rate/${ratingId}`);
};
