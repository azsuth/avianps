class Bird {
  constructor(bird) {
    this._bird = bird;
  }

  get id() {
    return this._bird.id;
  }

  get name() {
    return this._bird.name;
  }

  get scientificName() {
    return this._bird.scientificName;
  }

  get description() {
    return this._bird.description;
  }

  get conservationStatus() {
    return this._bird.conservationStatus;
  }

  get imageUrl() {
    return this._bird.imageUrl;
  }

  get scores() {
    return this._bird.scores;
  }

  get bps() {
    const numScores = this._bird.scores.length;

    if (numScores === 0) {
      return 0;
    }

    const results = this._bird.scores.reduce(
      (results, score) => ({
        promoters: results.promoters + (score.rating > 8 ? 1 : 0),
        detractors: results.detractors + (score.rating < 7 ? 1 : 0)
      }),
      {
        promoters: 0,
        detractors: 0
      }
    );

    const percentPromoters = results.promoters / numScores * 100;
    const percentDetractors = results.detractors / numScores * 100;

    return Math.round(percentPromoters - percentDetractors);
  }
}

export default Bird;
