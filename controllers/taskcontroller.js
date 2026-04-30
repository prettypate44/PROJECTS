let tasks = []; // IMPORTANT: mock database
let currentId = 1; // Ensures unique incremental IDs
const getTaskId = (req) => parseInt(req.params.id);
const notFound = (res) => res.status(404).json({ error: "Task not found" });

// CREATE TASK
exports.createTask = (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description required" });
  }

  const newTask = {
    id: currentId++, // Fixed ID generation issue
    title,
    description,
    status: status || "pending",
    createdAt: new Date(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// GET ALL TASKS
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// GET TASK BY ID
exports.getTaskById = (req, res) => {
  const task = tasks.find((t) => t.id === getTaskId(req));

  if (!task) {
    return notFound(res);
  }

  res.json(task);
};

// UPDATE TASK
exports.updateTask = (req, res) => {
  const task = tasks.find((t) => t.id === getTaskId(req));

  if (!task) {
    return notFound(res);
  }

  const { title, description, status } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;

  res.json(task);
};

// DELETE TASK
exports.deleteTask = (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === getTaskId(req));

  if (taskIndex === -1) {
    return notFound(res);
  }
  tasks.splice(taskIndex, 1);
  res.json({ message: "Task deleted successfully" });
};

// GET TASKS BY STATUS
exports.getTasksByStatus = (req, res) => {
  const { status } = req.query;

  let result = tasks;

  if (status) {
    result = tasks.filter((task) => task.status === status);
  }

  res.json(result);
};
