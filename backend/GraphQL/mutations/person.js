const { gql } = require("apollo-server");
//import * as yup from 'yup';
const { GraphQLError } = require("graphql");

const Person = require("../../models/Person")

const pubsub = require("../pubsub");

const typeDefs = gql`
    extend type Mutation {
        addPerson(
            name: String!
            phone: String
            street: String!
            city: String!
        ): Person
    }
`;

const resolvers = {
    Mutation: {
        addPerson: async (root, args, {currentUser}) => {
            if (!currentUser) {
                throw new GraphQLError('not authenticated', {
                    extensions: {
                    code: 'BAD_USER_INPUT',
                    }
                })
                }
        
                let person = null
        
                try {
                    person = new Person({ ...args })
                    await person.save()
                    currentUser.friends = currentUser.friends.concat(person)
                    await currentUser.save()
                } catch (error) {
                    throw new GraphQLError('Saving user failed', {
                        extensions: {
                        code: 'BAD_USER_INPUT',
                        invalidArgs: args.name,
                        error
                        }
                    })
                }
        
                pubsub.publish('PERSON_ADDED', { personAdded: person })
                
                return person
        }
    }
};

module.exports = {
    typeDefs,
    resolvers,
};