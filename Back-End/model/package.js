import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const placeSchema = new mongoose.Schema({
  place: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
});

const Package = mongoose.model("Package", packageSchema);
const Hotel = mongoose.model("Hotel", hotelSchema);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Place = mongoose.model("Place", placeSchema);

export { Package, Hotel, Restaurant, Place };
