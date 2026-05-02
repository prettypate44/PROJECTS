//authroutes/ protcts
 const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const { verifyToken } = require("../middleware/authMiddleware");

const { validateTask } = require("../middleware/routes");

// CREATE TASK
router.post("/tasks", verifyToken, validateTask, createTask);

// GET ALL TASKS
router.get("/tasks", verifyToken, getAllTasks);

// GET TASK BY ID
router.get("/tasks/:id", verifyToken, getTaskById);

// UPDATE TASK
router.put("/tasks/:id", verifyToken, updateTask);

// DELETE TASK
router.delete("/tasks/:id", verifyToken, deleteTask);

module.exports = router;