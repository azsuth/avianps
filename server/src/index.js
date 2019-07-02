const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    birds(parent, args, ctx, info) {
      return ctx.prisma.birds({}, info)
    },
    bird(parent, { id }, ctx, info) {
      return ctx.prisma.bird({ where: { id } }, info)
    },
    scoresByBird(parent, { id }, ctx, info) {
      return ctx.prisma.scores({
        where: {
          bird: { id }
        }
      })
    }
  },
  Mutation: {
    createScore(parent, { rating, comment, birdId }, ctx, info) {
      if (rating > 10 || rating < 0) {
        throw new Error(`Rating must be between 0 and 10. You provided ${rating}`)
      }

      return ctx.prisma.createScore({
        rating,
        comment,
        bird: {
          connect: {
            id: birdId
          }
        }
      }, info)
    },
    deleteScore(parent, { id }, ctx, info) {
      return ctx.prisma.deleteScore({ id }, info)
    },
    updateScore(parent, { id, rating, comment }, ctx, info) {
      if (rating != null && (rating > 10 || rating < 0)) {
        throw new Error(`Rating must be between 0 and 10. You provided ${rating}`)
      }

      return ctx.prisma.updateScore({
        data: { rating, comment },
        where: { id }
      })
    }
  },
  Score: {
    bird(parent, args, ctx) {
      return ctx.prisma.score({ id: parent.id }).bird()
    }
  },
  Bird: {
    scores(parent, args, ctx) {
      return ctx.prisma.bird({ id: parent.id}).scores()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
