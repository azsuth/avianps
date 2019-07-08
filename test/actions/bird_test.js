import sinon from 'sinon';

import {
  getBirds,
  navigateToDetails,
  navigateToRating
} from 'app/actions/bird';

import { NEW_BIRDS } from 'app/actions/types';

describe('the getBirds function', () => {
  let service;
  let dispatch;

  beforeEach(() => {
    service = sinon.fake.resolves('a birds array');
    dispatch = sinon.fake();
  });

  it('should call the service', () => {
    getBirds(() => {}, service)(dispatch);

    service.should.have.been.called;
  });

  it('should dispatch the NEW_BIRDS action', done => {
    getBirds(() => {}, service)(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.called;

      const dispatchedAction = dispatch.firstCall.args[0];

      expect(dispatchedAction.type).to.equal(NEW_BIRDS);
      expect(dispatchedAction.payload).to.equal('a birds array');

      done();
    });
  });
});

describe('the navigateToDetails function', () => {
  it('should call push on the history object', () => {
    const push = sinon.fake();

    navigateToDetails('bird_id', { push })();

    push.should.have.been.calledWith('/bird_id');
  });
});

describe('the navigateToRating function', () => {
  it('should call push on the history object', () => {
    const push = sinon.fake();

    navigateToRating('bird_id', { push })();

    push.should.have.been.calledWith('/bird_id/rate');
  });
});
