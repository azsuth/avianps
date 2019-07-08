import { sortBirds } from 'app/components/BirdList/BirdListContainer';
import mockBirds from './mockBirds';

describe('the sortBirds function', () => {
  it('should sort birds by name', () => {
    const sorted = sortBirds(mockBirds, 'name');

    expect(sorted[0].id).to.equal('cjxm26gvu00js0b421qx17ag9');
  });

  it('should sort birds by bps', () => {
    const sorted = sortBirds(mockBirds, 'score');

    expect(sorted[0].id).to.equal('cjxm26gv800jc0b420orvjphk');
  });

  it('should sort birds by comment count', () => {
    const sorted = sortBirds(mockBirds, 'commentCount');

    expect(sorted[0].id).to.equal('cjxm26gus00j40b424oz6yhql');
  });

  it('should not modify the passed array', () => {
    sortBirds(mockBirds, 'name');

    expect(mockBirds[0].id).to.equal('cjxm26gv000j80b426u4v7gfe');
  });
});
