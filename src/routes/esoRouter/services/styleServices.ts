import { queries } from "../../../db/schemas/esoapp";
import { reqDTO } from "../index";

const updateStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, style, itemValues } = reqDTO;
  const results = await queries.styles.updateStylesTable(player_uuid, style, itemValues);
  return results.affectedRows;
};

const getOneStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, style } = reqDTO;
  const results = await queries.styles.selectSingleStyle(player_uuid, style);
  return results;
};

const getAllStyles = async (reqDTO: reqDTO) => {
  const { player_uuid } = reqDTO;
  const results = await queries.styles.selectAllStyles(player_uuid);
  return results;
};

const addNewStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, style } = reqDTO;
  const results = await queries.styles.addNewStyle(player_uuid, style);
  return results;
};

const genStylesTable = async (reqDTO: reqDTO) => {
  const { player_uuid } = reqDTO;
  const results = await queries.styles.genStylesTable(player_uuid);
  return results;
};
const fillStylesTable = async (reqDTO: reqDTO) => {
  const { player_uuid } = reqDTO;
  const results = await queries.styles.fillStylesTable(player_uuid);
  return results;
};

export const styles = {
  updateStyle,
  getOneStyle,
  getAllStyles,
  addNewStyle,
  genStylesTable,
  fillStylesTable,
};
