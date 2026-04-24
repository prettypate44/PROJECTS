// controllers/authController.js
const bcrypt = require("bcryptjs");

let users = []; // temporary storage


// Register a new user
exports.register = async (req, res) => {
  const {  email, username, password } = req.body;


  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  

  const user = {
    id: Date.now(),
    username,
    password: hashedPassword,
  };

  users.push(user);

  res.status(201).json({ message: "User registered successfully" });
};