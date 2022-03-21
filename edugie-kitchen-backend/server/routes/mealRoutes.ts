import express from "express";
import imageMulter from "./../utils/multerImageUpload";
import {
  deleteMeal,
  updateMeal,
  createMeal,
  getAllMeal,
  getMeal,
} from "./../controllers/mealController";

const router = express.Router();

router.route("/").get(getAllMeal).post(imageMulter.single("img"), createMeal);
router.route("/:id").get(getMeal).delete(deleteMeal).patch(updateMeal);

export default router;
