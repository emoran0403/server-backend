import { queries } from "../../../db/schemas/esoapp";
import { generateHash } from "../../middlewares/passwords";
import { reqDTO } from "../index";

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

const generateTables = async () => {
  // this is where i can generate all the tables for a new player
};

export const auth = {
  doesPlayerExist,
  insertPlayer,
  getOnePlayer,
  getAllPlayers,
  generateTables,
};
