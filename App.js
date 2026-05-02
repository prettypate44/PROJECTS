const express = require('express');
const app = express();

const taskRoutes = require('./routes/taskRoutes');


//middleware
app.use(express.json());

//routes
app.use('/api/tasks', taskRoutes);

//server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 