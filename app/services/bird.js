import graphQLClient from 'app/client';

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
      scores {
        id
        rating
        comment
      }
    }
  }`;

  return client
    .request(query)
    .then(response => response.birds)
    .then(rawBirds => rawBirds.map(rawBird => new Bird(rawBird)))
    .catch(() => {
      throw new Error('Error loading birds!');
    });
};

export const createScoreService = (
  birdId,
  rating,
  comment,
  client = graphQLClient
) => {
  const query = `
  mutation createScore($rating: Int!, $comment: String, $birdId: ID!) {
    createScore(rating: $rating, comment: $comment, birdId: $birdId) {
      id
      rating
      comment
    }
  }`;

  return client
    .request(query, { birdId, rating, comment })
    .then(response => response.createScore)
    .catch(() => {
      throw new Error('Error submitting new rating!');
    });
};

export const deleteScoreService = (id, client = graphQLClient) => {
  const query = `
  mutation deleteScore($id: ID!) {
    deleteScore(id: $id) {
      id
    }
  }`;

  return client
    .request(query, { id })
    .then(response => response.deleteScore)
    .catch(() => {
      throw new Error('Error deleting rating!');
    });
};

export const updateScoreService = (
  id,
  rating,
  comment,
  client = graphQLClient
) => {
  const query = `
  mutation updateScore($id: ID!, $rating: Int!, $comment: String) {
    updateScore(id: $id, rating: $rating, comment: $comment) {
      id
      rating
      comment
    }
  }`;

  return client
    .request(query, { id, rating, comment })
    .then(response => response.updateScore)
    .catch(() => {
      throw new Error('Error updating rating!');
    });
};
