const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
  }

  type UserDeletionResponse {
    success: Boolean
    message: String
    deletedUser: User
  }

  type Query {
    users(page: Int, limit: Int, sortBy: String): [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String, password: String): User
    deleteUser(id: ID!): UserDeletionResponse
  }
`;

module.exports = typeDefs;
