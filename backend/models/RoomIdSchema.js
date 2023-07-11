const mongoose = require("mongoose");

const roomIdSchema = new mongoose.Schema({
  roomId: {
    type: String,
  },
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
});

module.exports = mongoose.model("RoomId", roomIdSchema);
