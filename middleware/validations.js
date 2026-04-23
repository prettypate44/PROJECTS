const { validateTask } = require("./middleware/validations");

router.post("/tasks", verifyToken, validateTask, createTask);