import { Package, Hotel, Restaurant, Place } from "../model/package.js";

const insertPackage = async (req, res) => {
  // Create an object which will be posted in database

  const data = {
    name: req.body.name,
    duration: req.body.duration,
    numberOfPeople: req.body.numberOfPeople,
  };
  console.log(data.name);
  console.log(req.body.city);
  // Create a new place
  const place = {
    city: req.body.city,
    state: req.body.state,
  };
  console.log(place);

  let placeId = null;
  let hotelId = null;
  let restaurantId = null;

  try {
    const existingPlace = await Place.findOne({ place });
    console.log(existingPlace);
    if (existingPlace) {
      placeId = existingPlace._id;
    } else {
      const newPlace = new Place({ place });
      await newPlace.save();
      placeId = newPlace._id;
    }
  } catch (err) {
    console.log("Error while creating new place: ", err);
  }
  try {
    const existingHotel = await Hotel.findOne({ name: req.body.hotel });
    if (existingHotel) {
      hotelId = existingHotel._id;
    } else {
      const newHotel = new Hotel({ name: req.body.hotel });
      console.log(newHotel);
      await newHotel.save();
      hotelId = newHotel._id;
    }
  } catch (err) {
    console.log("Error while creating new hotel: ", err);
  }
  try {
    const existingRestaurant = await Restaurant.findOne({
      name: req.body.restaurant,
    });
    if (existingRestaurant) {
      restaurantId = existingRestaurant._id;
    } else {
      const newRestaurant = new Restaurant({ name: req.body.restaurant });
      await newRestaurant.save();
      restaurantId = newRestaurant._id;
    }
  } catch (err) {
    console.log("Error while creating new restaurant: ", err);
  }
  data.place = placeId;
  data.hotel = hotelId;
  data.restaurant = restaurantId;
  const newPackage = new Package(data);
  try {
    await newPackage.save();
    res.status(200).json(newPackage);
  } catch (err) {
    if (err) console.log("Error while creating new package: ", err);
  }
};

const getPackages = async (req, res) => {
  try {
    const packages = await Package.find()
      .populate("place")
      .populate("hotel")
      .populate("restaurant");
    res.status(200).json(packages);
  } catch (err) {
    console.log("Error while getting packages: ", err);
  }
};

export { insertPackage, getPackages };
