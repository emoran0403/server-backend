import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { isNil } from "lodash";
import { reqDTO } from "../index";

const getAllWrits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    // const { player_uuid } = reqDTO;
    const results = await services.writs.getAllWrits(reqDTO);
    //   const results = await queries.writs.selectAllWrits("1");
    // console.log(results);

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

const updateWrit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    // const { player_uuid, writ_uuid, completion } = reqDTO;

    const results = await services.writs.updateWrit(reqDTO);

    if (results) return res.json({ message: `Updated Writ` });

    res.status(400).json({ message: `Could not update Writ` });
  } catch (error) {
    next(error);
  }
};

const newWrit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };

    const results = await services.writs.newWrit(reqDTO);
    if (isNil(results)) return res.status(500).json({ message: "Error saving new Writ" });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

const makeBigWritTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await services.writs.makeBigWritTable();
    console.log("results", results);
    if (results) return res.json({ message: "Successfully made writs table!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

export const writs = {
  getAllWrits,
  updateWrit,
  newWrit,
  makeBigWritTable,
};
