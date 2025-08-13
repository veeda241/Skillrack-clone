const mongoose = require('mongoose');

const HackathonSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  organizer: String,
});

module.exports = mongoose.model('Hackathon', HackathonSchema);
