const express = require("express");
const Todo = require("../models/Todo");
const authMiddleware = require("../middleware/authMiddleware"); 

const router = express.Router();

// Get all todos for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id }); 
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new todo for the logged-in user
router.post("/", authMiddleware, async (req, res) => {
  const newTodo = new Todo({
    name: req.body.name,
    date: req.body.date,
    color: req.body.color || "#9FDDFF",
    done: req.body.done || false,
    userId: req.user.id, 
  });

  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo 
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (todo.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to edit this todo" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo 
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (todo.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to delete this todo" });
    }

    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
