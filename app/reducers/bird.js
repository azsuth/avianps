import { NEW_BIRDS, LOADING } from 'app/actions/types';

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

      return { ...state, birds: action.payload, birdsById, loading: false };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
