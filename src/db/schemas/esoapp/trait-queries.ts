import { Query } from "../../query";
import { db_list_response, trueFalseString } from "./models";

/**
 * Used to update a specified trait table
 * @param player_uuid player uuid
 * @param table the name of the table to generate "jewelery" | "weapon" | "armor"
 * @param traitValues tuple array containing arrays of ['trait', 'true || false']
 */
const updateAnyTraitTable = (player_uuid: string, column: string, value: trueFalseString) =>
  Query(
    `
          UPDATE player_traits
          SET ${column} = ${value}
          WHERE player_uuid = '${player_uuid}'
    `
  );

/**
 * Used to select all items from a specified trait table
 * @param player_uuid player uuid
 */
const selectAllFromTraitTable = (player_uuid: string): Promise<db_list_response[]> =>
  Query(
    `
    SELECT * FROM player_traits WHERE player_uuid = '${player_uuid}'
    `
  );

const makeBigTraitTable = (styledItems: string[]) =>
  Query(`
  CREATE TABLE player_traits
  (
    player_uuid TEXT PRIMARY KEY,
    ${styledItems}
    );
    `);

const fillBigTraitTable = (player_uuid: string) =>
  Query(`
    INSERT INTO player_traits 
    (player_uuid)
    VALUES
    ('${player_uuid}');
    `);

export default {
  makeBigTraitTable,
  fillBigTraitTable,
  updateAnyTraitTable,
  selectAllFromTraitTable,
};
