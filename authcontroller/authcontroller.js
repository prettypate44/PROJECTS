// controllers/authController.js
const bcrypt = require("bcryptjs");

let users = []; // temporary storage

exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now(),
    username,
    password: hashedPassword,
  };

  users.push(user);

  res.status(201).json({ message: "User registered" });
};