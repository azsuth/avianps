import sinon from 'sinon';

import { getBirdsService, createScoreService } from 'app/services/bird';
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
});

describe('the createScoreService function', () => {
  it('should call the client request function', () => {
    const request = sinon.fake.resolves();

    createScoreService('a_bird_id', 8, 'comment', { request });

    request.should.have.been.called;
  });

  it('should return a promise', () => {
    const request = sinon.fake.resolves({ data: { createScore: 'response' } });

    const response = createScoreService('a_bird_id', 8, 'comment', { request });

    expect(response).to.be.instanceOf(Promise);
    expect(response.then).to.be.instanceOf(Function);
  });
});
