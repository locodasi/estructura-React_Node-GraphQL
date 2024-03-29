const { gql } = require("apollo-server");

const typeDefs = gql`
    enum YesNo {
        YES
        NO
    }
`;

module.exports = {
    typeDefs,
//    resolvers,
};