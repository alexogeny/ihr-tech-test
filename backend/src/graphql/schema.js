/**
 * We are going to define the gql schema as a string.
 * You could reflect this automatically from your resolvers but... wanna try and get this thing working.
 * Won't add a method to create users since a citizen should be registered by the government when they are born.
 * Citizens will be able to create names, though.
 * Citizens will be able to update their profile with a new name.
 * Citizens will be able to view their history of past names
 * Citizens will be able to view a list of names coming up for expiry within 28 days
 * Citizens will be able to change their password
 * Admin will be able to change a user's admin status
 * Admin will be able to see history of a name's users
 * Admin will be able to generate a list of all upcoming overdue namechanges
 */
module.exports = `
    type User {
        id: ID!
        name: Name!
        pwd: String!
        isAdmin: Boolean!
    }
    type Name {
        id: ID!
        value: String!
    }
    type History {
        id: ID!
        userId: Int!
        nameId: Int!
        dateAssigned: Int!
    }
    type Query {
        names: [Name!]!
        users: [User!]!
        history: [History!]!
        name(id: ID!): Name
        user(id: ID!): User
        historyUser(userId: Int!): History
        historyName(nameId: Int!): History
    }
    type Mutation {
        createName(value: String!): Name!
        createAssign(nameId: Int!, userId: Int!): [Int!]!
        updateUser(id: ID!, pwd: String!, isAdmin: Boolean!): [Int!]!
    }
`;