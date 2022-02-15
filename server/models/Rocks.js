const { Schema, model, DataTypes } = require("mongoose");

console.log("start Rocks");

const rockSchema = new Schema({
  name: {
    type: String,
    allowNull: false,
  },

  rockText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
  },

  rock_id: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdTime) => moment(createdTime).format("LLLL"),
  },

  user_id: {
    type: Number,
    required: true,
  },
});

const Rock = model("Rock", rockSchema);

console.log("End Rocks");

module.exports = Rock;
