//authroutes/ protcts
 const {verifyToken} = require("../middleware/taskroutes");

router.post("/tasks", verifyToken, createTask);
router.get("/tasks", verifyToken, getAllTasks)
router.get("/tasks/:id", verifyToken, getTaskById);
router.put("/tasks/:id", verifyToken, updateTask);
router.delete("/tasks/:id", verifyToken, deleteTask);

module.exports = router;//validation router

const { validateTask } = require("../middleware/authMiddleware");

router.post("/tasks", validateTask, createTask);