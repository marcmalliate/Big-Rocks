const { gql } = require("apollo-server-express");

console.log("start typeDefs");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    Rock: String
    Task: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Rock {
   rock_id: ID
    name: String
    rockText: String
    createdAt: String
    user_id: ID
  }

  type Task {
    task_id: ID
    taskText: String
    completed: Boolean
    createdAt: String
    user_id: ID
  }

  type Query {
    users: [User]
    user(username: String!): User
    rocks(username: String): [Rock]
    rock(rock_id: ID!): Rock
    tasks(username): String!: [Task]
    task(task_id: ID!): Task
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRock(rockText: String!, user_id: ID!): Rock
    addTask(task: String!, user_id: ID!): Task
    removeRock(rock_id: ID!): Rock
    removeTask(task_id: ID!): Task
  }
`;
console.log("end typeDefs");

module.exports = typeDefs;
