const { gql } = require("apollo-server");

// const User = require("../../models/User");

const typeDefs = gql`
    type Token {
        value: String!
    }
`;


module.exports = {
    typeDefs,
    //resolvers,
};