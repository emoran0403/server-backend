import { Query } from "../../query";
import { db_list_response, trueFalseString } from "./models";

/**
 * Used to update a single style with the unlocked items
 * @param uuid - the uuid of the player.
 * @param style - the style to update.
 * @param itemValues - tuple array containing arrays of ['item', 'true' || 'false']
 * @returns
 */
const updateStylesTable = (player_uuid: string, column: string, value: trueFalseString) =>
  Query(
    `
    UPDATE player_styles
    SET ${column} = ${value}
    WHERE player_uuid = '${player_uuid}'
    `
  );

/**
 * Used to return the unlocked items for the given style
 * @param uuid - the uuid of the player.
 * @param style_columns - the style to select.
 * @returns
 */
const selectSingleStyle = (player_uuid: string, style_columns: string[]) =>
  Query(`
  SELECT ${style_columns} FROM player_styles WHERE player_uuid = '${player_uuid}'
  `);

/**
 * Used to return the unlocked items for the all styles
 * @param uuid - the uuid of the player.
 * @returns
 */
const selectAllStyles = (player_uuid: string): Promise<db_list_response[]> =>
  Query(`
SELECT * FROM player_styles WHERE player_uuid = '${player_uuid}';
`);

/**
 * Used to add a new style to the uuid-styles table for each player
 * @param uuidArray Array of player uuid strings
 * @param style the new style
 * @returns
 */
const addNewStyle = (newColumns: string[]) =>
  Query(
    `
    ALTER TABLE player_styles ADD ${newColumns}
    `
  );

const makeBigStyleTable = (styledItems: string[]) =>
  Query(`
  CREATE TABLE player_styles
  (
    player_uuid TEXT PRIMARY KEY,
    ${styledItems}
    );
    `);

const fillBigStyleTable = (player_uuid: string, styledItems: string[], falses: string[]) =>
  Query(`
    INSERT INTO player_styles 
    (player_uuid, ${styledItems})
    VALUES
    (${player_uuid}, ${falses});
    `);

export default {
  updateStylesTable,
  selectSingleStyle,
  selectAllStyles,
  addNewStyle,
  makeBigStyleTable,
  fillBigStyleTable,
};
