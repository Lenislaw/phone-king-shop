const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["user"],
    default: "user",
  },
  password: {
    type: String,
    required: true,
  },
  likes: [
    {
      product: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  history: [],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
