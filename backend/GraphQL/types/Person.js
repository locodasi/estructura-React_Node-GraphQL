const { gql } = require("apollo-server");

const typeDefs = gql`
    type Person {
        name: String!
        phone: String
        address: Address!
        id: ID!
    }
`;

const resolvers = {
    Person: {
        address: (root) => {
            return { 
                street: root.street,
                city: root.city
            }
        }
    }
};

module.exports = {
    typeDefs,
    resolvers,
};