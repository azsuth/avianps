import sinon from 'sinon';
import { getBirdsService } from 'app/services/bird';

describe('the getBirds function', () => {
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
