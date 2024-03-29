const { gql } = require("apollo-server");

const typeDefs = gql`
    type Address {
        street: String!
        city: String! 
    }
`;

module.exports = {
    typeDefs,
    //resolvers,
};