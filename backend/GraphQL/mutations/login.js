const { gql } = require("apollo-server");
//import * as yup from 'yup';
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

const typeDefs = gql`
    extend type Mutation {
        login(
            username: String!
            password: String!
        ): Token
    }
`;

const resolvers = {
    Mutation: {
        login: async (root, args) => {
            const user = await User.findOne({ username: args.username })
            if ( !user || args.password !== 'secret' ) {
                throw new GraphQLError('wrong credentials', {
                    extensions: {
                    code: 'BAD_USER_INPUT'
                    }
                })        
            }

            console.log(user)
        
            const userForToken = {
                username: user.username,
                id: user._id,
            }
        
            return { value: jwt.sign(userForToken, process.env.JWT_SECRET) }
        }
    },
};

module.exports = {
    typeDefs,
    resolvers,
};