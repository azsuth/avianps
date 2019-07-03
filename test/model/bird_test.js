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
});
