const { AuthenticationError } = require("apollo-server-express");
const { User, Rock, Task } = require("../models");
const { signToken } = require("../utils/auth");

console.log("Start Resolvers");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("rocks");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("rocks");
    },
    rocks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Rock.find(params).sort({ createdAt: -1 });
    },
    rock: async (parent, { rock_id }) => {
      return Rock.findOne({ user_id: rock_id });
    },
    tasks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Task.find(params).sort({ createdAt: -1 });
    },
    task: async (parent, { task_id }) => {
      return Task.findOne({ user_id: task_id });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    addRock: async (parent, { rockText, user_id }) => {
      const rock = await Rock.create({ rockText, user_id });

      await User.findOneAndUpdate(
        { username: user_id },
        { $addToSet: { rocks: rock.rock_id } }
      );

      return rock;
    },

    addTask: async (parent, { taskText, user_id }) => {
      const task = await task.create({ taskText, user_id });

      await User.findOneAndUpdate(
        { username: user_id },
        { $addToSet: { tasks: task.task_id } }
      );

      return task;
    },
    removeRock: async (parent, { rock_id }) => {
      return Rock.findOneAndDelete({ user_id: rock_id });
    },
    removeTask: async (parent, { task_id }) => {
      return Task.findOneAndDelete({ user_id: task_id });
    },
  },
};

console.log("End Resolvers");

module.exports = resolvers;
