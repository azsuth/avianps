import { NEW_BIRDS, LOADING, ERROR, SORT_BY_CHANGED } from 'app/actions/types';

export const INITIAL_STATE = {
  loading: true,
  birds: [],
  birdsById: {},
  error: null,
  sortBy: null
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
    case SORT_BY_CHANGED:
      return {
        ...state,
        sortBy: action.payload === state.sortBy ? null : action.payload
      };
    default:
      return state;
  }
};
