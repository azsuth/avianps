import { NEW_BIRDS, LOADING, ERROR } from 'app/actions/types';

export const INITIAL_STATE = {
  loading: true,
  birds: [],
  birdsById: {},
  error: null
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
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
