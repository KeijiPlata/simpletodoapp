const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Task name
    date: { type: String, required: true }, // Due date as a string (YYYY-MM-DD)
    color: { type: String, default: "#9FDDFF" }, // Task color
    done: { type: Boolean, default: false }, // Completion status
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
