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
}

export default Bird;
