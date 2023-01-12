const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema({
  name: String,
  description: String,
})

const Rooms = mongoose.model('Rooms', RoomsSchema);

module.exports = Rooms