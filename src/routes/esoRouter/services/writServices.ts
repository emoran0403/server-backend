import { queries } from "../../../db/schemas/esoapp";
import { reqDTO } from "../index";

// const doesWritExist = async (reqDTO: reqDTO) => {
//   const { player_uuid, writ_uuid } = reqDTO;

//   const results = await queries.writs.selectWrit(player_uuid, writ_uuid);
//   if (results.length) return true;
//   return false;
// };

const getAllWrits = async (reqDTO: reqDTO) => {
  const { player_uuid } = reqDTO;

  const results = await queries.writs.selectAllWrits(player_uuid);
  return results;
};

const updateWrit = async (reqDTO: reqDTO) => {
  const { player_uuid, writ_uuid, completion } = reqDTO;

  const results = await queries.writs.setCompletion(player_uuid, writ_uuid, completion);
  return results.affectedRows;
};

const newWrit = async (reqDTO: reqDTO) => {
  const { player_uuid, writ, is_jewelry } = reqDTO;
  const results = await queries.writs.addWrit(player_uuid, writ, is_jewelry);
  if (results.rowCount !== 1) return null;
  return results;
};

const makeBigWritTable = async () => {
  const results = await queries.writs.makeBigWritTable();
  return results;
};

export const writs = {
  getAllWrits,
  updateWrit,
  newWrit,
  makeBigWritTable,
};
