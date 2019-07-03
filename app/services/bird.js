import graphQLClient from '../client';

import Bird from 'app/model/bird';

export const getBirdsService = (client = graphQLClient) => {
  const query = `
  {
    birds {
      id
      name
      scientificName
      description
      conservationStatus
      imageUrl
    }
  }`;

  return client
    .request(query)
    .then(response => response.birds)
    .then(rawBirds => rawBirds.map(rawBird => new Bird(rawBird)));
};

export const createScoreService = (rating, client = graphQLClient) => {
  const query = `
  mutation createScore($rating: Int!, $comment: String, $birdId: ID!) {
    createScore(rating: $rating, comment: $comment, birdId: $birdId) {
      id
      rating
      comment
    }
  }`;

  return client
    .request(query, rating)
    .then(response => response.data.createScore);
};
