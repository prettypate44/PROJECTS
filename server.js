const express = require("express");

const app = express();

const PORT = 5000;

// MIDDLEWARE
app.use(express.json());

// TEMP DATABASE
let tasks = [
  {
    id: 1,
    title: "Learn Express",
    completed: false,
  },
  {
    id: 2,
    title: "Build API",
    completed: true,
  },

  {
    id: 3,
    title: "Test API",
    completed: true,
  },

  {
    id: 4,
    title: "Google slides",
    completed: true,
  },
];

// HOME ROUTE
app.get("/api/tasks/:id", (req, res) => {
  res.send("Task Manager API Running...");
});


// GET ALL TASKS
app.get("/api/tasks/:id", (req, res) => {
  res.status(200).json(tasks);
});


// GET SINGLE TASK
app.get("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  };

  res.status(200).json(task);
});


// CREATE TASK
app.post("/api/tasks", (req, res) => {
  const { title } = req.body || {};

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  };

  const newTask = {
    id: tasks.length > 0
      ? Math.max(...tasks.map(t => t.id)) + 1
      : 1,
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created",
    task: newTask,
  });
});


// UPDATE TASK 
app.put("/api/tasks/", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  };

  task.title = req.body.title || task.title;

  if (req.body.completed !== undefined) {
    task.completed = req.body.completed;
  };

  res.status(200).json({
    message: "Task updated",
    task,
  });
});


// DELETE TASK
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const taskExists = tasks.find((task) => task.id === id);

  if (!taskExists) {
    return res.status(404).json({
      message: "Task not found",
    });
  };

  tasks = tasks.filter((task) => task.id !== id);

  res.status(200).json({
    message: "Task deleted",
  });
});


// SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});