import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { reqDTO } from "../index";

const getOneTrait = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.traits.getOneTrait(reqDTO);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const getAlltraits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.traits.getAllTraits(reqDTO);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const updateTrait = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * update trait
   */
  try {
    const reqDTO: reqDTO = { ...req.body };
  } catch (error) {
    next(error);
  }
};

export const traits = {
  getOneTrait,
  getAlltraits,
  updateTrait,
};
