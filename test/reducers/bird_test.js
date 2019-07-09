import reducer, { INITIAL_STATE } from 'app/reducers/bird';
import { NEW_BIRDS, SORT_BY_CHANGED } from 'app/actions/types';

describe('the bird reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});

    expect(state).to.equal(INITIAL_STATE);
  });

  it('should populate birds for the NEW_BIRDS action', () => {
    const birds = [];

    const state = reducer(undefined, {
      type: NEW_BIRDS,
      payload: birds
    });

    expect(state.birds).to.equal(birds);
  });

  it('should populate the birdsById for the NEW_BIRDS action', () => {
    const birds = [
      { id: 'id_1', name: 'name_1' },
      { id: 'id_2', name: 'name_2' }
    ];

    const state = reducer(undefined, {
      type: NEW_BIRDS,
      payload: birds
    });

    expect(state.birdsById.id_1.name).to.equal('name_1');
    expect(state.birdsById.id_2.name).to.equal('name_2');
  });

  it('should set sortBy to null when toggling off a sort type', () => {
    const state = reducer(
      { sortBy: 'name' },
      {
        type: SORT_BY_CHANGED,
        payload: 'name'
      }
    );

    expect(state.sortBy).to.be.null;
  });
});
