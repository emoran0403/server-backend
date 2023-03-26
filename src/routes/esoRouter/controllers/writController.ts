import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { isNil } from "lodash";

const getOneWrit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO = { ...req.body };
    const { player_uuid, writ_uuid } = reqDTO;

    const writExists = await services.writs.doesWritExist(player_uuid, writ_uuid);
    //   const results = await queries.writs.selectWrit("1", "2");
    if (!writExists) res.status(404).json({ message: "that writ does not exist" });

    const results = await services.writs.getSingleWrit(player_uuid, writ_uuid);

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

const getAllWrits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO = { ...req.body };
    const { player_uuid } = reqDTO;
    const results = await services.writs.getAllWrits(player_uuid);
    //   const results = await queries.writs.selectAllWrits("1");
    // console.log(results);

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

const updateWrit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO = { ...req.body };
    const { player_uuid, writ_uuid, completion } = reqDTO;

    const writExists = await services.writs.doesWritExist(player_uuid, writ_uuid);
    //   const results = await queries.writs.selectWrit("1", "2");
    if (!writExists) res.status(404).json({ message: "that writ does not exist" });

    const results = await services.writs.updateWrit(player_uuid, writ_uuid, completion);

    if (results) res.json({ message: `writ ${writ_uuid} for player ${player_uuid} updated to show ${completion}` });

    res.status(400).json({ message: `could not update writ ${writ_uuid} for player ${player_uuid}` });
  } catch (error) {
    next(error);
  }
};

const newWrit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO = { ...req.body };
    const { uuid, writ, is_jewelry } = reqDTO;

    const results = await services.writs.newWrit(uuid, writ, is_jewelry);
    if (isNil(results)) res.status(500).json({ message: "Error saving new Writ" });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export const writs = {
  getOneWrit,
  getAllWrits,
  updateWrit,
  newWrit,
};
