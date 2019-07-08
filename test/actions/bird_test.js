import sinon from 'sinon';

import {
  getBirds,
  navigateToDetails,
  navigateToRating,
  rateBird,
  deleteRating,
  updateRating
} from 'app/actions/bird';

import { NEW_BIRDS, ERROR, LOADING } from 'app/actions/types';

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

  it('should dispatch an error', done => {
    getBirds(sinon.fake.rejects())(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.called;

      const dispatchedAction = dispatch.firstCall.args[0];

      expect(dispatchedAction.type).to.equal(ERROR);

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

describe('the rateBird function', () => {
  let service;
  let dispatch;
  let goBack;

  beforeEach(() => {
    service = sinon.fake.resolves();
    dispatch = sinon.fake();
    goBack = sinon.fake();
  });

  it('should dispatch the loading action', () => {
    rateBird('bird_id_1', 9, 'comment', { goBack }, service)(dispatch);

    dispatch.should.have.been.called;

    const dispatchedAction = dispatch.firstCall.args[0];

    expect(dispatchedAction.type).to.equal(LOADING);
    expect(dispatchedAction.payload).to.be.true;
  });

  it('should call the service', () => {
    rateBird('bird_id_1', 9, 'comment', { goBack }, service)(dispatch);

    service.should.have.been.called;

    const args = service.firstCall.args;

    expect(args[0]).to.equal('bird_id_1');
    expect(args[1]).to.equal(9);
    expect(args[2]).to.equal('comment');
  });

  it('should dispatch the getBirds action', done => {
    rateBird('bird_id_1', 9, 'comment', { goBack }, service)(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.calledTwice;

      const dispatchedAction = dispatch.secondCall.args[0];

      expect(dispatchedAction).to.be.instanceOf(Function);

      done();
    });
  });

  it('should call the goBack function on success', done => {
    rateBird('bird_id_1', 9, 'comment', { goBack }, service)(dispatch);

    setImmediate(() => {
      goBack.should.have.been.called;

      done();
    });
  });

  it('should dispatch an error', done => {
    rateBird('bird_id_1', 9, 'comment', { goBack }, sinon.fake.rejects())(
      dispatch
    );

    setImmediate(() => {
      dispatch.should.have.been.calledTwice;

      const dispatchedAction = dispatch.secondCall.args[0];

      expect(dispatchedAction.type).to.equal(ERROR);

      done();
    });
  });
});

describe('the deleteRating function', () => {
  let service;
  let dispatch;

  beforeEach(() => {
    service = sinon.fake.resolves();
    dispatch = sinon.fake();
  });

  it('should dispatch the loading action', () => {
    deleteRating('rating_id', service)(dispatch);

    dispatch.should.have.been.called;

    const dispatchedAction = dispatch.firstCall.args[0];

    expect(dispatchedAction.type).to.equal(LOADING);
    expect(dispatchedAction.payload).to.be.true;
  });

  it('should call the service', () => {
    deleteRating('rating_id', service)(dispatch);

    service.should.have.been.called;
    expect(service.firstCall.args[0]).to.equal('rating_id');
  });

  it('should dispatch the getBirds action', done => {
    deleteRating('rating_id', service)(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.calledTwice;

      const dispatchedAction = dispatch.secondCall.args[0];

      expect(dispatchedAction).to.be.instanceOf(Function);

      done();
    });
  });

  it('should dispatch an error', done => {
    deleteRating('rating_id', sinon.fake.rejects())(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.calledTwice;

      const dispatchedAction = dispatch.secondCall.args[0];

      expect(dispatchedAction.type).to.equal(ERROR);

      done();
    });
  });
});

describe('the updateRating function', () => {
  let service;
  let dispatch;
  let goBack;

  beforeEach(() => {
    service = sinon.fake.resolves();
    dispatch = sinon.fake();
    goBack = sinon.fake();
  });

  it('should dispatch the loading action', () => {
    updateRating('rating_id', 3, 'new comment', { goBack }, service)(dispatch);

    dispatch.should.have.been.called;

    const dispatchedAction = dispatch.firstCall.args[0];

    expect(dispatchedAction.type).to.equal(LOADING);
    expect(dispatchedAction.payload).to.be.true;
  });

  it('should call the service', () => {
    updateRating('rating_id', 3, 'new comment', { goBack }, service)(dispatch);

    service.should.have.been.called;

    const args = service.firstCall.args;

    expect(args[0]).to.equal('rating_id');
    expect(args[1]).to.equal(3);
    expect(args[2]).to.equal('new comment');
  });

  it('should dispatch the getBirds action', done => {
    updateRating('rating_id', 3, 'new comment', { goBack }, service)(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.calledTwice;

      const dispatchedAction = dispatch.secondCall.args[0];

      expect(dispatchedAction).to.be.instanceOf(Function);

      done();
    });
  });

  it('should call the goBack function on success', done => {
    updateRating('rating_id', 3, 'new comment', { goBack }, service)(dispatch);

    setImmediate(() => {
      goBack.should.have.been.called;

      done();
    });
  });

  it('should dispatch an error', done => {
    updateRating(
      'rating_id',
      3,
      'new comment',
      { goBack },
      sinon.fake.rejects()
    )(dispatch);

    setImmediate(() => {
      dispatch.should.have.been.calledTwice;

      const dispatchedAction = dispatch.secondCall.args[0];

      expect(dispatchedAction.type).to.equal(ERROR);

      done();
    });
  });
});
