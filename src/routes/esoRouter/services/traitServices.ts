import { queries } from "../../../db/schemas/esoapp";
import { reqDTO } from "../index";

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

const updateTrait = async (reqDTO: reqDTO) => {
  const { player_uuid, table, traitValues, item } = reqDTO;
  const results = await queries.traits.updateAnyTraitTable(player_uuid, table, traitValues, item);
  return results;
};
export const traits = {
  getOneTrait,
  getAllTraits,
  updateTrait,
};
