// date/time
// task
// boolean completed
// if true render image
// if false display none

const { Schema, model, Types } = require("mongoose");

console.log("start Task");

const taskSchema = new Schema({
  taskText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },

  task_id: {
    type: Number,
    required: true,
  }

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdTime) => moment(createdTime).format("LLLL"),
  },

  user_id: {
    type: Number,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = model("Task", taskSchema);

console.log("End Task");

module.exports = Task;
