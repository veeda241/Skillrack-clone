const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const SECRET = 'skillrack-secret'; // move to .env in production

// In-memory user store (for demo)
const users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

module.exports = router;
