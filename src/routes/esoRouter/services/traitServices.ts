import { queries } from "../../../db/schemas/esoapp";
import { reqDTO } from "../index";

const updateTrait = async (reqDTO: reqDTO) => {
  const { player_uuid, table, traitValues } = reqDTO;
  const results = await queries.traits.updateAnyTraitTable(player_uuid, table, traitValues);
  return results.affectedRows;
};

const getOneTrait = async (reqDTO: reqDTO) => {
  const { player_uuid, table, item } = reqDTO;
  const results = await queries.traits.selectSingleFromTraitTable(player_uuid, table, item);
  return results;
};

const getAllTraits = async (reqDTO: reqDTO) => {
  const { player_uuid, table } = reqDTO;
  const results = await queries.traits.selectAllFromTraitTable(player_uuid, table);
  return results;
};

export const traits = {
  updateTrait,
  getOneTrait,
  getAllTraits,
};
