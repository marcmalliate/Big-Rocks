import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ALL_ROCKS = gql`
  {
    rocks {
      name
      rockText
      createdAt
      user_id
    }
  }
`;

export const QUERY_SINGLE_ROCK = gql`
  query rock($id: ID!) {
    rock(_id: $id) {
      rock_id
      name
      rockText
      createdAt
      user_id
    }
  }
`;

export const QUERY_ALL_TASKS = gql`
  {
    tasks {
      name
      taskText
      completed
      createdAt
      user_id
    }
  }
`;

export const QUERY_SINGLE_TASK = gql`
  query task($id: ID!) {
    task(_id: $id) {
      task_id
      taskText
      completed
      createdAt
      user_id
    }
  }
`;
