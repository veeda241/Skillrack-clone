require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/hackathons', require('./routes/hackathons'));

app.listen(5000, () => console.log('Server running on port 5000'));
