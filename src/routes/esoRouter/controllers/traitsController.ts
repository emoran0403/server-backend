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
    const results = await services.traits.updateTrait(reqDTO);
    if (results.affectedRows) return res.json({ message: "Trait updated successfully!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

export const traits = {
  getOneTrait,
  getAlltraits,
  updateTrait,
};
