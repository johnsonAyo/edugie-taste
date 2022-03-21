import Meal from "../models/mealModel";
import catchAsync from "../utils/catchAsync";
import { NextFunction, Response } from "express";
import { CustomReq } from "../models/custom";

import { getAll, getOne, updateOne, deleteOne } from "./handlerFactory";
import cloudinaryImage from "../utils/cloudinaryImageStorage";

const updateMeal = updateOne(Meal);
const deleteMeal = deleteOne(Meal);
const getAllMeal = getAll(Meal);
const getMeal = getOne(Meal, "");

const createMeal = catchAsync(
  async (req: CustomReq, res: Response, next: NextFunction) => {
    const { price, desc, title, category } = req.body;

    let cloudImage = await cloudinaryImage.uploader.upload(req.file.path);
    let createCategory = await Meal.create({
      price,
      desc,
      title,
      category,
      img: cloudImage.secure_url,
      cloudinary_id: cloudImage.public_id,
    });
    res.status(201).json({
      status: "success",
      data: {
        data: createCategory,
      },
    });
  }
);

export { deleteMeal, updateMeal, createMeal, getAllMeal, getMeal };
