const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hackathons', (req, res) => {
  res.json([{ name: 'Hackathon 1' }, { name: 'Hackathon 2' }]);
});

// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
