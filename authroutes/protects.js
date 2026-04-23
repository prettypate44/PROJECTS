const { verifyToken } = require("./authroutes/middleware/projects.js");

router.post("/tasks", verifyToken, createTask);
router.get("/tasks", verifyToken, getAllTasks);