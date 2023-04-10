import { queries } from "../../../db/schemas/esoapp";
import { reqDTO } from "../index";

const updateStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, style, itemValues } = reqDTO;
  const results = await queries.styles.updateStylesTable(Number(player_uuid), style, itemValues);
  return results.affectedRows;
};

const getOneStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, style } = reqDTO;
  const results = await queries.styles.selectSingleStyle(Number(player_uuid), style);
  return results;
};

const getAllStyles = async (reqDTO: reqDTO) => {
  const { player_uuid } = reqDTO;
  const results = await queries.styles.selectAllStyles(Number(player_uuid));
  return results;
};

const addNewStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, style } = reqDTO;
  const results = await queries.styles.addNewStyle(Number(player_uuid), style);
  return results;
};

export const styles = {
  updateStyle,
  getOneStyle,
  getAllStyles,
  addNewStyle,
};
