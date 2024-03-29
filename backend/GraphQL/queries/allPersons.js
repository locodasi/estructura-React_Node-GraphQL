const { gql } = require("apollo-server");

const Person = require("../../models/Person")

const typeDefs = gql`
    extend type Query {
        allPersons(phone:YesNo): [Person!]!
    }
`;

const resolvers = {
    Query: {
        allPersons: async (root, args) => {
            if (!args.phone) {
                return Person.find({})
            }
            return Person.find({ phone: { $exists: args.phone === 'YES'  }})
        } 
    },
};

module.exports = {
    typeDefs,
    resolvers,
};