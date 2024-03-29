const { gql } = require("apollo-server");
//import * as yup from 'yup';

const pubsub = require("../pubsub");

const typeDefs = gql`
    extend type Subscription {
        personAdded: Person!
    }
`;

const resolvers = {
    Subscription: {
        personAdded: {
            subscribe: () => pubsub.asyncIterator(['PERSON_ADDED'])
        }
    },
};

module.exports = {
    typeDefs,
    resolvers,
};