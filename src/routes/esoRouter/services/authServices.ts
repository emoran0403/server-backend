import { queries } from "../../../db/schemas/esoapp";
import { generateHash } from "../../middlewares/passwords";

const doesPlayerExist = async (username: string) => {
  const results = await queries.auth.findPlayer(username);
  if (results.length) return true;
  return false;
};

const insertPlayer = async (username: string, plainTextPassword: string) => {
  const hashedPassword = generateHash(plainTextPassword);
  const results = await queries.auth.newPlayer(username, hashedPassword);
  return results;
};

const getAllPlayers = async () => {
  const results = await queries.auth.findAllPlayers();
  return results;
};

const getOnePlayer = async (username: string) => {
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
