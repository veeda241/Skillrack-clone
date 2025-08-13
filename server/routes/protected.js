const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router(); // ✅ This line was missing
const SECRET = 'skillrack-secret';

const hackathons = [
  { name: 'Hackathon 1' },
  { name: 'Hackathon 2' }
];

router.get('/dashboard', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: `Welcome ${decoded.username}` });
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
});

router.get('/hackathons', (req, res) => {
  res.json(hackathons);
});

router.post('/hackathons', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, SECRET);
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Hackathon name required' });

    hackathons.push({ name });
    res.status(201).json({ message: 'Hackathon added' });
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
});

module.exports = router;
