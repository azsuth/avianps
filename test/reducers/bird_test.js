import sinon from 'sinon';

import reducer, { INITIAL_STATE } from 'app/reducers/bird';
import { NEW_BIRDS } from 'app/actions/types';

describe('the bird reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});

    expect(state).to.equal(INITIAL_STATE);
  });

  it('should populate birds for the NEW_BIRDS action', () => {
    const state = reducer(undefined, {
      type: NEW_BIRDS,
      payload: 'test payload'
    });

    expect(state.birds).to.equal('test payload');
  });
});
