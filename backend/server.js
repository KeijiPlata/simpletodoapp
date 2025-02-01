// All of the sensitive data is placed in .env file, use gitignore later
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// connection to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => res.send("API is running"));
app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}!!`)
});