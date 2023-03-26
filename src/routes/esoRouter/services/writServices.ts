import { queries } from "../../../db/schemas/esoapp";
import { trueFalseString, writ } from "../../../db/schemas/esoapp/models";

const doesWritExist = async (player_uuid: string, writ_uuid: string) => {
  const results = await queries.writs.selectWrit(player_uuid, writ_uuid);
  if (results.length) return true;
  return false;
};

const getAllWrits = async (player_uuid: string) => {
  const results = await queries.writs.selectAllWrits(player_uuid);
  return results;
};

const getSingleWrit = async (player_uuid: string, writ_uuid: string) => {
  const results = await queries.writs.selectWrit(player_uuid, writ_uuid);
  return results;
};

const updateWrit = async (player_uuid: string, writ_uuid: string, completion: trueFalseString) => {
  const results = await queries.writs.setCompletion(player_uuid, writ_uuid, completion);
  return results.affectedRows;
};

const newWrit = async (player_uuid: string, writ: writ, is_jewelry: boolean) => {
  const results = await queries.writs.addWrit(player_uuid, writ, is_jewelry);
  if (results.rowCount !== 1) return null;
  return results;
};

export const writs = {
  doesWritExist,
  getAllWrits,
  getSingleWrit,
  updateWrit,
  newWrit,
};
