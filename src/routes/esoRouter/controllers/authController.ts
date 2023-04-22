import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { reqDTO } from "../index";
import { generateToken } from "../../middlewares/passwords";

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

    //* reqDTO now contains player_uuid
    const trait_results = await services.traits.fillBigTraitTable(reqDTO);
    if (trait_results.affectedRows) {
      const style_results = await services.styles.fillBigStyleTable(reqDTO);
      if (style_results.affectedRows) {
        return res.status(200).json({ message: "successfully filled traits and styles tables" });
      }
      return res.status(200).json({ message: "could not fill styles table" });
    }
    return res.status(200).json({ message: "could not fill trait table" });
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

const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: `valid token!` });
  } catch (error) {
    next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDupe = { ...req } as Request;
    console.log("reqDupe user: ", reqDupe.user);
    const token = await services.auth.login(reqDupe);
    console.log("token: ", token);

    if (token) return res.status(200).json({ message: "Successfully logged in", token });
    return res.status(401).json({ message: "Could not login" });
  } catch (error) {
    next(error);
  }
};

export const auth = {
  newPlayer,
  getAllPlayers,
  getOnePlayer,
  checkToken,
  login,
};
