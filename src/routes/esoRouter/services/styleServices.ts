import { queries } from "../../../db/schemas/esoapp";
import { STYLED_ITEMS, STYLES } from "../../../db/schemas/esoapp/constants";
import { db_list_response, reqDTO } from "../../../db/schemas/esoapp/models";

const updateStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, item, style, completion } = reqDTO;
  const column = `${item.toLocaleLowerCase()}_${style.replace(/ /g, "_").toLocaleLowerCase()}`;

  const results = await queries.styles.updateStylesTable(player_uuid, column, completion);
  return results.affectedRows;
};

const getOneStyle = async (reqDTO: reqDTO) => {
  const { player_uuid, style } = reqDTO;

  let columns = [];

  for (let j = 0; j < STYLED_ITEMS.length; j++) {
    const item = STYLED_ITEMS[j];

    columns.push(`${item.toLocaleLowerCase()}_${style.replace(/ /g, "_").toLocaleLowerCase()}`);
  }

  const results = await queries.styles.selectSingleStyle(player_uuid, columns);
  return results;
};

const getAllStyles = async (reqDTO: reqDTO): Promise<db_list_response[]> => {
  const { player_uuid } = reqDTO;
  const results = await queries.styles.selectAllStyles(player_uuid);
  return results;
};

const addNewStyle = async (reqDTO: reqDTO) => {
  const { new_style } = reqDTO;

  let newColumns = [];

  for (let i = 0; i < new_style.length; i++) {
    const style = new_style[i].replace(/ /g, "_").toLocaleLowerCase();
    for (let j = 0; j < STYLED_ITEMS.length; j++) {
      const item = STYLED_ITEMS[j].toLocaleLowerCase();

      newColumns.push(`${item}_${style} BOOLEAN DEFAULT FALSE`);
    }
  }
  const results = await queries.styles.addNewStyle(newColumns);
  return results;
};

const makeBigStyleTable = async () => {
  let styledItems = [];

  for (let i = 0; i < STYLES.length; i++) {
    const style = STYLES[i].replace(/ /g, "_").toLocaleLowerCase();
    for (let j = 0; j < STYLED_ITEMS.length; j++) {
      const item = STYLED_ITEMS[j].toLocaleLowerCase();

      styledItems.push(`${item}_${style} Boolean`);
    }
  }
  const results = await queries.styles.makeBigStyleTable(styledItems);
  return results;
};

const fillBigStyleTable = async (reqDTO: reqDTO) => {
  const { player_uuid } = reqDTO;

  let styledItems = [];
  let falses = [];

  for (let i = 0; i < STYLES.length; i++) {
    const style = STYLES[i].replace(/ /g, "_").toLocaleLowerCase();
    for (let j = 0; j < STYLED_ITEMS.length; j++) {
      const item = STYLED_ITEMS[j].toLocaleLowerCase();

      styledItems.push(`${item}_${style}`);
      falses.push("false");
    }
  }
  const results = await queries.styles.fillBigStyleTable(player_uuid, styledItems, falses);
  return results;
};

export const styles = {
  updateStyle,
  getOneStyle,
  getAllStyles,
  addNewStyle,
  makeBigStyleTable,
  fillBigStyleTable,
};
