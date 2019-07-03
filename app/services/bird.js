import graphQLClient from '../client';

export const getBirdsService = (client = graphQLClient) => {
  const query = `{
    birds {
      id
      name
    }
  }`;

  return client.request(query).then(response => response.birds);
};
