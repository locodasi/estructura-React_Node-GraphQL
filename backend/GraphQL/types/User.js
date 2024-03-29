const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        username: String!
        friends: [Person!]!
        id: ID!
    }
`;

// const resolvers = {
//     User: {
//         contacts: async (obj, args) => {
//             console.log(obj.contacts)
//             return {
//                 contacts: obj.contacts
//             }
//         },
//     },
// };

module.exports = {
    typeDefs,
    // resolvers,
};