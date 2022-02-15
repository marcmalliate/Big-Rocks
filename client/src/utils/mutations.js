import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ROCK = gql`
  mutation addRock($name: String!, $rockText: String!, $user_id: ID!) {
    addRock(name: $name, rockText: $rockText, user_id: $user_id) {
      token
      rock {
        name
        rockText
        user_id
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($taskText: String!, $user_id: ID!) {
    addTask(taskText: $taskText, user_id: $user_id) {
      token
      task {
        taskText
        user_id
      }
    }
  }
`;
