import { Request, Response, NextFunction } from "express";
import { services } from "../services";

const newPlayer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const playerDTO = { ...req.body };
    const { username, plainTextPassword } = playerDTO;

    const playerExists = await services.auth.doesPlayerExist(username);

    if (playerExists) {
      res.status(400).json({ message: "player username already exists" });
    } else {
      const results = await services.auth.insertPlayer(username, plainTextPassword);

      /**
       * generate table functions go here
       */

      // !?! testing writs here
      // const wow = await queries.writs.genWritTable("2");
      // console.log(wow);
      // const writResults = await queries.writs.genWritTable(results[0].player_uuid);
      // !?! testing writs here

      res.status(200).json(results.rows);
    }
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
    const playerDTO = { ...req.body };
    const { username } = playerDTO;

    const playerExists = await services.auth.doesPlayerExist(username);

    if (!playerExists) {
      res.status(404).json({ message: "that player does not exist" });
    } else {
      const results = await services.auth.getOnePlayer(username);
      res.status(200).json(results);
    }
  } catch (error) {
    next(error);
  }
};

export const auth = {
  newPlayer,
  getAllPlayers,
  getOnePlayer,
};
