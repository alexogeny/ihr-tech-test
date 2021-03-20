/**
 * Imports
 */
import express from 'express';
import {
    ApolloServer,
    gql
} from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import db from './db';

import faker from 'faker';
import times from 'lodash.times';
import random from 'lodash.random';

/**
 * Constants
 */
const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { db }
});

const app = express();
server.applyMiddleware({ app });

db.sequelize.sync().then(() => {
    app.listen({ port: 4000 }, () =>
        console.log(`The server is serving at http://localhost:4000${server.graphqlPath} 🚀🚀`)
    );
});
