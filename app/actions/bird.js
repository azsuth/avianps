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
