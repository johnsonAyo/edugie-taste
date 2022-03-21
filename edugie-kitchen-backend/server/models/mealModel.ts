import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A meal must have a title"],
    message: "Input a meal name",
  },
  img: {
    type: String,
    required: [true, "A meal must have an image"],
    message: "Input a meal name",
  },
  category: {
    type: String,
    required: [true, "A meal must have a category"],
    message: "Input a meal name",
  },
  price: {
    type: String,
    required: [true, "A meal must have a price"],
    message: "Input a meal name",
  },
  desc: {
    type: String,
    required: [true, "A meal must have a desc"],
    message: "Input a meal description",
  },

  cloudinary_id: {
    type: String,
  },
});
const Meal = mongoose.model("Meal", mealSchema);

export default Meal;
