import { NEW_BIRDS } from 'app/actions/types';

export const INITIAL_STATE = {
  loading: true,
  birds: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_BIRDS:
      return { ...state, birds: action.payload };
    default:
      return state;
  }
};
