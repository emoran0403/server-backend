import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { reqDTO } from "../index";

const getOneWrit = async (req: Request, res: Response, next: NextFunction) => {};

const getAlltraits = async (req: Request, res: Response, next: NextFunction) => {};

const updateTrait = async (req: Request, res: Response, next: NextFunction) => {};

export const traits = {
  getOneWrit,
  getAlltraits,
  updateTrait,
};
