const { merge } = require ("lodash");
const { gql } = require("apollo-server");

const Address = require("./types/Address");
const User = require("./types/User");
const Person = require("./types/Person");
const Token = require("./types/Token");

const allPersonsQuery = require("./queries/allPersons");
const meQuery = require("./queries/me");

const loginMutation = require("./mutations/login");
const personMutation = require("./mutations/person");

const personSubscription = require("./subscriptions/person");

const YesNo = require("./enum/YesNo");

const rootTypeDefs = gql`
    type Query {
        root: String
    }

    type Mutation {
        root: String
    }

    type Subscription {
        root: String
    }
`;

const typeDefs = [
    rootTypeDefs,

    personSubscription.typeDefs,

    YesNo.typeDefs,

    Address.typeDefs,
    Person.typeDefs,
    User.typeDefs,
    Token.typeDefs,

    allPersonsQuery.typeDefs,
    meQuery.typeDefs,

    loginMutation.typeDefs,
    personMutation.typeDefs,
];

const resolvers = merge(
    Person.resolvers,

    personSubscription.resolvers,

    allPersonsQuery.resolvers,
    meQuery.resolvers,

    loginMutation.resolvers,
    personMutation.resolvers,

);


module.exports = { typeDefs, resolvers };