import Bird from 'app/model/bird';

describe('the bird model', () => {
  it('should expose all the bird properties', () => {
    const rawBird = {
      id: 'id_1',
      name: 'robin',
      scientificName: 'scientific robin',
      description: 'common I think',
      conservationStatus: 'not endangered',
      imageUrl: 'http://birdpics.com/robin',
      scores: [{ id: 'score_1', rating: 8 }]
    };

    const bird = new Bird(rawBird);

    expect(bird.id).to.equal(rawBird.id);
    expect(bird.name).to.equal(rawBird.name);
    expect(bird.scientificName).to.equal(rawBird.scientificName);
    expect(bird.description).to.equal(rawBird.description);
    expect(bird.conservationStatus).to.equal(rawBird.conservationStatus);
    expect(bird.imageUrl).to.equal(rawBird.imageUrl);
    expect(bird.scores.length).to.equal(1);
  });

  describe('the bps getter', () => {
    it('should return 0 when there are no scores', () => {
      const bird = new Bird({ id: 'id_1', scores: [] });
      expect(bird.bps).to.equal(0);
    });

    it('should calculate the BPS (bird promoter score)', () => {
      const ratings = [8, 5, 5, 9, 3];

      const rawBird = {
        id: 'id_1',
        scores: ratings.map(rating => ({ rating }))
      };

      const bird = new Bird(rawBird);

      expect(bird.bps).to.equal(-40);
    });

    it('should return 100 for all promoters', () => {
      const ratings = [10, 9, 10, 10];

      const rawBird = {
        id: 'id_1',
        scores: ratings.map(rating => ({ rating }))
      };

      const bird = new Bird(rawBird);

      expect(bird.bps).to.equal(100);
    });

    it('should return -100 for all detractors', () => {
      const ratings = [0, 1, 4, 0, 6];

      const rawBird = {
        id: 'id_1',
        scores: ratings.map(rating => ({ rating }))
      };

      const bird = new Bird(rawBird);

      expect(bird.bps).to.equal(-100);
    });
  });
});
