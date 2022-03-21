import catchAsync from "./../utils/catchAsync";
import ErrorHandler from "./../utils/appError";
import { NextFunction, Request, Response } from "express";
import { CustomReq } from "../models/custom";

const deleteOne = (Model: any) =>
  catchAsync(async (req: CustomReq, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndDelete({
      user: req.user?._id,
      _id: req.params.id,
    });

    if (!doc || doc.length === 0) {
      return next(ErrorHandler(404, "No document found with that ID", {}));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

const updateOne = (Model: any) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc || doc.length === 0) {
      return next(ErrorHandler(404, "No document found with that ID", {}));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const createOne = (Model: any) =>
  catchAsync(async (req: CustomReq, res: Response, next: NextFunction) => {
    const fullBody = { ...req.body, user: req.user?._id };

    const doc = await Model.create(fullBody);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const getOne = (Model: any, popOptions: string) =>
  catchAsync(async (req: CustomReq, res: Response, next: NextFunction) => {
    console.log(req.user?._id);
    let query = Model.findById({ _id: req.params.id }).populate("user");
    if (popOptions) query = query.populate("");
    const doc = await query;
    console.log(doc);

    if (!doc || doc.length === 0) {
      return next(ErrorHandler(404, "No document found with that ID", {}));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const getAll = (Model: any) =>
  catchAsync(async (req: CustomReq, res: Response, next: NextFunction) => {
    // To allow for nested GET reviews on trecipe (hack)
    let filter = {};
    if (req.params.userId) filter = { userId: req.params.userId };

    const features = Model.find(filter)
    // const doc = await features.query.explain();
    const doc = await features;

    if (!doc || doc.length === 0) {
      return next(ErrorHandler(404, "No document found with that ID", {}));
    }

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

export { getAll, getOne, updateOne, createOne, deleteOne };
