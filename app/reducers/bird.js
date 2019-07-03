import { NEW_BIRDS } from 'app/actions/types';

export const INITIAL_STATE = {
  loading: true,
  birds: [],
  birdsById: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_BIRDS:
      const birdsById = action.payload.reduce((map, bird) => {
        map[bird.id] = bird;
        return map;
      }, {});

      return { ...state, birds: action.payload, birdsById };
    default:
      return state;
  }
};
