import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { reqDTO } from "../index";

const newPlayer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //* check if player already exists
    let reqDTO: reqDTO = { ...req.body };
    const playerExists = await services.auth.doesPlayerExist(reqDTO);
    if (playerExists) return res.status(400).json({ message: "player username already exists" });

    //* insert player, grabbing player_uuid
    const insertPlayerResults = await services.auth.insertPlayer(reqDTO);
    reqDTO.player_uuid = insertPlayerResults.rows[0].player_uuid;

    console.log("reqDTO from auth controller", reqDTO);

    if (insertPlayerResults.affectedRows && insertPlayerResults.affectedRows && insertPlayerResults.affectedRows) {
      return res.status(200).json({ message: "all good" });
    } else {
      return res.status(200).json({ message: "Something went wrong!" });
    }

    /**
     * generate table functions go here
     */

    // !?! testing writs here
    // const wow = await queries.writs.genWritTable("2");
    // console.log(wow);
    // const writResults = await queries.writs.genWritTable(results[0].player_uuid);
    // !?! testing writs here

    // res.status(200).json({ message: "check logs" });
  } catch (error) {
    next(error);
  }
};

const getAllPlayers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await services.auth.getAllPlayers();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const getOnePlayer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const playerExists = await services.auth.doesPlayerExist(reqDTO);

    if (!playerExists) return res.status(404).json({ message: "that player does not exist" });

    const results = await services.auth.getOnePlayer(reqDTO);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const auth = {
  newPlayer,
  getAllPlayers,
  getOnePlayer,
};
