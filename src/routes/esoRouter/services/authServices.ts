import { Request } from "express";
import { queries } from "../../../db/schemas/esoapp";
import { generateHash, generateToken } from "../../middlewares/passwords";
import { reqDTO } from "../../../db/schemas/esoapp/models";

const doesPlayerExist = async (reqDTO: reqDTO) => {
  const { username } = reqDTO;
  const results = await queries.auth.findPlayer(username);
  if (results.length) return true;
  return false;
};

const insertPlayer = async (reqDTO: reqDTO) => {
  const { username, plainTextPassword } = reqDTO;
  const hashedPassword = generateHash(plainTextPassword);
  const results = await queries.auth.newPlayer(username, hashedPassword);

  console.log("results: ", results);
  return results;
};

const getAllPlayers = async () => {
  const results = await queries.auth.findAllPlayers();
  return results;
};

const getOnePlayer = async (reqDTO: reqDTO) => {
  const { username } = reqDTO;
  const results = await queries.auth.findPlayer(username);
  return results;
};

const login = async (reqDTO: Request) => {
  if (!reqDTO.user) {
    return null;
  }

  const { username, player_uuid } = reqDTO.user;

  if (!username || !player_uuid) {
    return null;
  }

  return generateToken(username, player_uuid);
};

export const auth = {
  doesPlayerExist,
  insertPlayer,
  getOnePlayer,
  getAllPlayers,
  login,
};
