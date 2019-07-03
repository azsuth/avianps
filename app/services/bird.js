import graphQLClient from '../client';

export const getBirdsService = (client = graphQLClient) => {
  const query = `{
    birds {
      id
      name
      scientificName
      description
      conservationStatus
      imageUrl
    }
  }`;

  return client.request(query).then(response => response.birds);
};
