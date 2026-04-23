let tasks = []; // IMPORTANT: mock database

// CREATE TASK
exports.createTask = (req, res) => {
    const { title, description, status } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "Title and description required" });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status: status || "pending",
        createdAt: new Date()
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
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};

// UPDATE TASK
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    const { title, description, status } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;

    res.json(task);
};

// DELETE TASK
exports.deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    };   
    tasks.splice(taskIndex, 1);
    res.json({ message: "Task deleted successfully" });
};
