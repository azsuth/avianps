import sinon from 'sinon';
import { getBirdsService, createScoreService } from 'app/services/bird';

describe('the getBirdsService function', () => {
  it('should call the client request function', () => {
    const request = sinon.fake.returns(Promise.resolve());

    getBirdsService({ request });

    request.should.have.been.called;
  });

  it('should return a promise', () => {
    const request = sinon.fake.returns(Promise.resolve({ birds: [] }));

    const response = getBirdsService({ request });

    expect(response).to.be.instanceOf(Promise);
    expect(response.then).to.be.instanceOf(Function);
  });
});

describe('the createScoreService function', () => {
  const rating = { rating: 8, comment: 'comment', birdId: 'a_bird_id' };

  it('should call the client request function', () => {
    const request = sinon.fake.resolves();

    createScoreService(rating, { request });

    request.should.have.been.called;
  });

  it('should return a promise', () => {
    const request = sinon.fake.resolves({ data: { createScore: 'response' } });

    const response = createScoreService(rating, { request });

    expect(response).to.be.instanceOf(Promise);
    expect(response.then).to.be.instanceOf(Function);
  });
});
