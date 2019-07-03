import sinon from 'sinon';

import { getBirds } from 'app/actions/bird';

import { NEW_BIRDS } from 'app/actions/types';

describe('the getBirds function', () => {
  let service;
  let dispatch;

  beforeEach(() => {
    service = sinon.fake.resolves('a birds array');
    dispatch = sinon.fake();
  });

  it('should call the service', () => {
    getBirds(service)(dispatch);

    service.should.have.been.called;
  });

  it('should dispatch the NEW_BIRDS action', done => {
    getBirds(service)(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.called;

      const dispatchedAction = dispatch.firstCall.args[0];

      expect(dispatchedAction.type).to.equal(NEW_BIRDS);
      expect(dispatchedAction.payload).to.equal('a birds array');

      done();
    });
  });
});
