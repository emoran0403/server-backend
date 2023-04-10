import { Query } from "../../query";
import { STYLES } from "./constants";
import { item_values } from "./models";

/**
 * Used to generate the styles table for a player
 * @param uuid - the uuid of the player.
 * @returns
 */
const genStylesTable = (player_uuid: number) =>
  Query(
    `CREATE TABLE _${player_uuid}_styles (
      style_name TEXT PRIMARY KEY,
      axes Boolean,
      belts Boolean,
      boots Boolean,
      bows Boolean,
      chests Boolean,
      daggers Boolean,
      gloves Boolean,
      helmets Boolean,
      legs Boolean,
      maces Boolean,
      shields Boolean,
      shoulders Boolean,
      staves Boolean,
      swords Boolean,
      all_owned boolean
      );`
  );

/**
 * Used to populate a player's style table with the initial false values.  This will need to be run once when player is first created.
 * @param uuid - the uuid of the player.
 * @returns
 */
const fillStylesTable = (player_uuid: number) =>
  Query(
    `
    INSERT INTO _${player_uuid}_styles 
    (style_name, axes, belts, boots, bows, chests, daggers, gloves, helmets, legs, maces, shields, shoulders, staves, swords, all_owned)
    VALUES (${STYLES.map(
      (style) => `('${style}', false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)`
    ).toString()});
      `
  );

/**
 * Used to update a single style with the unlocked items
 * @param uuid - the uuid of the player.
 * @param style - the style to update.
 * @param itemValues - tuple array containing arrays of ['item', 'true' || 'false']
 * @returns
 */
const updateStylesTable = (player_uuid: number, style: string, itemValues: item_values[]) =>
  Query(
    `
    UPDATE _${player_uuid}_styles
    SET ${itemValues.map(([item, value]) => `${item} = ${value}`).toString()}
    WHERE style_name = '${style}'
    `
  );

/**
 * Used to return the unlocked items for the given style
 * @param uuid - the uuid of the player.
 * @param style - the style to select.
 * @returns
 */
const selectSingleStyle = (player_uuid: number, style: string) =>
  Query(`
  SELECT * FROM _${player_uuid}_styles WHERE style_name = '${style}'
  `);

/**
 * Used to return the unlocked items for the all styles
 * @param uuid - the uuid of the player.
 * @returns
 */
const selectAllStyles = (player_uuid: number) =>
  Query(`
SELECT * FROM _${player_uuid}_styles;
`);

/**
 * Used to add a new style to the uuid-styles table for each player
 * @param uuidArray Array of player uuid strings
 * @param style the new style
 * @returns
 */
const addNewStyle = (uuid: number, style: string) =>
  Query(
    `
      INSERT INTO _${uuid}_styles
      (style_name, axes, belts, boots, bows, chests, daggers, gloves, helmets, legs, maces, shields, shoulders, staves, swords, all_owned)
      VALUES ('${style}', false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
    `
  );

//* trying to update an array of player uuids - not working as expected
// Query(`
// ${uuidArray
//   .map((uuid) => {
//     `
//     INSERT INTO _${uuid}_styles
//     (style_name, axes, belts, boots, bows, chests, daggers, gloves, helmets, legs, maces, shields, shoulders, staves, swords, all_owned)
//     VALUES ('${style.toString()}', false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)
//     `;
//   })
//   .toString()}
//   `);

//* hardcoding a single player's style - not working as expected
//   Query(`
// ${uuidArray
//   .map((uuid) => {
//     `
//     INSERT INTO _1_styles
//     (style_name, axes, belts, boots, bows, chests, daggers, gloves, helmets, legs, maces, shields, shoulders, staves, swords, all_owned)
//     VALUES ('penislol', false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)
//     `;
//   })
//   .toString()}
// `);

export default {
  genStylesTable,
  fillStylesTable,
  updateStylesTable,
  selectSingleStyle,
  selectAllStyles,
  addNewStyle,
};

/**
 * make a styles table for a player
 * fill it with the styles and default values
 * update an unlocked item within a style
 * return unlocked items within a style
 * add a new style for future proofing
 */

// const updateStylesTable = (player_uuid: number, style: string, itemValues: item_values[]) => {
//   const mappedItems = itemValues.map(([item, value]) => `${item} = ${value}`).toString();
//   return Query(
//     `
//     UPDATE _${player_uuid}_styles
//     SET ${mappedItems}
//     WHERE style_name = '${style}'
//     `
//   );
// };
