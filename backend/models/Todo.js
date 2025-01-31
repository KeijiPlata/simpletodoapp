const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, 
    date: { type: String, required: true }, 
    color: { type: String, default: "#9FDDFF" }, 
    done: { type: Boolean, default: false }, 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
