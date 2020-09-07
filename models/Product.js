const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
  },

  name: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  producent: {
    type: String,
    required: true,
  },
  producentCode: {
    type: String,
    required: true,
  },
  operatingSystem: {
    type: String,
    required: true,
  },
  processor: { type: String, required: true },
  ramMemory: {
    type: Number,
    required: true,
  },
  builtinMemory: { type: Number, required: true },
  supForMemoryCards: { type: String, required: true },
  standardSim: { type: String, required: true },
  dualSim: { type: String, required: true },
  modem: { type: String, required: true },
  wifi: { type: String, required: true },
  bluetooth: { type: String, required: true },
  nfc: { type: String, required: true },
  usb: { type: String, required: true },
  audioConnectors: { type: String, required: true },
  screen: { type: String, required: true },
  camera: { type: String, required: true },
  gps: { type: String, required: true },
  fingerprintScanner: { type: String, required: true },
  proximitySensor: { type: String, required: true },
  battery: { type: Number, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  depth: { type: Number, required: true },
  weight: { type: Number, required: true },
  inStock: { type: Number, required: true },
  photo: [],
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  rate: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      rate: { type: Number },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", ProductSchema);
