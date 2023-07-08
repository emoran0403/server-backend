import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { reqDTO } from "../../../db/schemas/esoapp/models";

const getAlltraits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: any = { ...req.body, player_uuid: req.headers.player_uuid.toLocaleString() };

    // console.log("reqDTO: ", reqDTO);
    const results = await services.traits.getAllTraits(reqDTO);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const updateTrait = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log("traits controller request: ", req.body);
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.traits.updateTrait(reqDTO);
    if (results.affectedRows) return res.json({ message: "Trait updated successfully!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

const makeBigTraitTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await services.traits.makeBigTraitTable();
    console.log("results", results);
    if (results) return res.json({ message: "Successfully made traits table!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

const fillBigTraitTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.traits.fillBigTraitTable(reqDTO);
    console.log("results", results);
    if (results) return res.json({ message: "Successfully filled traits table!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

export const traits = {
  getAlltraits,
  updateTrait,
  makeBigTraitTable,
  fillBigTraitTable,
};
