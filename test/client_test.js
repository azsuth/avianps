import client from 'app/client'
import { GraphQLClient } from 'graphql-request'

describe('GraphQL client', function() {
  it('is an instance of GraphQLClient', function() {
    expect(client).to.be.instanceOf(GraphQLClient)
  })

  it('is configured with an API url', function() {
    // __API_URL__ is a constant replaced by webpack via DefinePlugin
    expect(client.url).to.eq(__API_URL__)
  })
})
