import sinon from 'sinon';

import {
  getBirdsService,
  createScoreService,
  deleteScoreService
} from 'app/services/bird';
import Bird from 'app/model/bird';

describe('the getBirdsService function', () => {
  it('should call the client request function', () => {
    const request = sinon.fake.returns(Promise.resolve());

    getBirdsService({ request });

    request.should.have.been.called;
  });

  it('should return a promise', () => {
    const request = sinon.fake.resolves({ birds: [] });

    const response = getBirdsService({ request });

    expect(response).to.be.instanceOf(Promise);
    expect(response.then).to.be.instanceOf(Function);
  });

  it('should map the response to an array of Bird objects', done => {
    const request = sinon.fake.resolves({ birds: [{ id: 'id_1' }] });

    getBirdsService({ request }).then(birds => {
      expect(birds.length).to.equal(1);
      expect(birds[0]).to.be.instanceOf(Bird);

      done();
    });
  });

  it('should throw an error if the request fails', done => {
    const request = sinon.fake.rejects();

    getBirdsService({ request })
      .then(() => {
        done(new Error('failed'));
      })
      .catch(err => {
        expect(err).to.be.instanceOf(Error);
        done();
      });
  });
});

describe('the createScoreService function', () => {
  it('should call the client request function', () => {
    const request = sinon.fake.resolves();

    createScoreService('a_bird_id', 8, 'comment', { request });

    request.should.have.been.called;
  });

  it('should return a promise', done => {
    const request = sinon.fake.resolves({ createScore: 'response_1' });

    const response = createScoreService('a_bird_id', 8, 'comment', { request });

    expect(response).to.be.instanceOf(Promise);

    response.then(response => {
      expect(response).to.equal('response_1');
      done();
    });
  });

  it('should throw an error if the request fails', done => {
    const request = sinon.fake.rejects();

    createScoreService('a_bird_id', 8, 'comment', { request })
      .then(() => {
        done(new Error('failed'));
      })
      .catch(err => {
        expect(err).to.be.instanceOf(Error);
        done();
      });
  });
});

describe('the deleteScoreService function', () => {
  it('should call the client request function', () => {
    const request = sinon.fake.resolves();

    deleteScoreService('a_bird_id', { request });

    request.should.have.been.called;
  });

  it('should return a promise', done => {
    const request = sinon.fake.resolves({ deleteScore: 'response_1' });

    const response = deleteScoreService('a_bird_id', { request });

    expect(response).to.be.instanceOf(Promise);

    response.then(response => {
      expect(response).to.equal('response_1');
      done();
    });
  });

  it('should throw an error if the request fails', done => {
    const request = sinon.fake.rejects();

    deleteScoreService('a_bird_id', { request })
      .then(() => {
        done(new Error('failed'));
      })
      .catch(err => {
        expect(err).to.be.instanceOf(Error);
        done();
      });
  });
});
