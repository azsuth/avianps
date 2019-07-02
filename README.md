# React Code Challenge

This repo provides a starting point for dscout's React code challenge. It comes configured with the dev dependencies you'll need to start the Webpack server and the Karma test runner.

## The Challenge

The International Bird Society has a new pet project, inspired by an intern who just graduated from business school. Ari the Intern learned all about the power of the [Net Promoter Score (NPS)](https://www.netpromoter.com/know/) in determining the health of a business, and now his manager wants to adapt that concept to determine the health of New Zealand birds.

They're asking for a web app that will determine the Bird Promoter Score (BPS) for a set of birds. They will be sending out messages to their followers to use the app to help them determine these scores.

Users will be presented with a set of birds, and they will answer the question "How likely is it that you would recommend this bird to a friend or colleague" by rating each bird from 0 to 10. Users can also leave any additional comments about how each bird could improve.

In addition to the rating interface, they're also looking for an interface that lets them see all of the birds, their computed Bird Promoter Scores (following the same formula as the Net Promoter Score), and their comments (if any). Some nice-to-haves would include the ability to sort the birds by name, score, and comment count, but it's not a core requirement for them.

## Requirements

*Note*: please treat this code as you would any other production-grade change.

### The app should be written in React

Webpack is already configured with Babel, so you can use JSX and any ES6+ features covered by `babel-preset-env`. Feel free to extend the Babel configuration if you would like to enable more language features.

### It should perform queries and mutations against the provided GraphQL API

The API has already been set up, and instructions on starting the API server are in the Getting Started section. A simple GraphQL client using [graphql-request](https://github.com/prisma/graphql-request) has already been configured for you and can be imported from `app/client`.

Documentation on the mutations and queries available in the API is available in the Prisma playground. The database has been seeded with the birds and their data.

### It should contain multiple routes

If you're using [ReactRouter](https://github.com/ReactTraining/react-router), feel free to use either v3 or v4.

## Getting Started

### Dependencies

You must have Node already installed on your machine. We recommend versions >8.x.

Once Node is installed, install the javascript dependencies with Yarn or npm. The instructions in the rest of this document will use Yarn, but npm should be interoperable for the commands we'll be using.

```shell
# install the app dependencies
$ yarn install

# install the API server dependencies
$ cd server
$ yarn install
```

### Starting the API server

This relies on [Prisma](https://www.prismagraphql.com/) to host and run a simple GraphQL API and database. The API and database has already been configured for you in the `server` directory and deployed to Prisma's free cloud hosting. You'll just need to set an environment variable and start the API server locally.

#### Set environment variables

The app relies on environment variables to configure the GraphQL API endpoint. Copy `.env.sample` to `.env`.

#### Start the server

To start the Prisma server, run the following from the `server` directory:

```shell
$ yarn dev
```

This will start the API server as well as open a playground to explore the GraphQL API and execute queries and mutations.

### Starting the Webpack server

To start the webpack dev server, start a new shell process and ensure you're in the repo's root directory. Then run:

```shell
$ yarn start
```

The app is served on port `8080` by default.

### Running the tests

This app has been configured with Karma as the test runner, Mocha as the test framework, and Chai as the assertion library. Start the tests with:

```shell
$ yarn test
```

Karma will watch for changes and automatically rerun the test suite. It runs on headless Chrome, so if you don't have Chrome installed you should either install it or update the Karma config to use a different browser. See the "browser" section of [Karma's config documentation](http://karma-runner.github.io/2.0/config/configuration-file.html) for more details.
