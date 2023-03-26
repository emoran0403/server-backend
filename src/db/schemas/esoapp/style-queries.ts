import { Query } from "../../query";
import { STYLES } from "./constants";

/**
 * Used to generate the styles table for a player
 * @param uuid - the uuid of the player.
 * @returns
 */
const genStylesTable = (uuid: string) =>
  Query(
    `CREATE TABLE _${uuid}_styles (
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
const fillStylesTable = (uuid: string) =>
  Query(
    `
    INSERT INTO _${uuid}_styles 
    (style_name, axes, belts, boots, bows, chests, daggers, gloves, helmets, legs, maces, shields, shoulders, staves, swords, all_owned)
    VALUES (${STYLES.map(
      (style) => `(${style}, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)`
    ).toString()});
      `
  );

/**
 * Used to update a single style with the unlocked items
 * @param uuid - the uuid of the player.
 * @param style - the style to update.
 * @param itemValues - tuple array containing arrays of ['item', 'true || false']
 * @returns
 */
const updateStylesTable = (uuid: string, style: string, itemValues: string[]) =>
  Query(
    `
    UPDATE _${uuid}_styles
    SET ${itemValues.map(([item, value]) => `${item} = ${value}`).toString()}
    WHERE style_name = ${style}
    `
  );

/**
 * Used to return the unlocked items for the given style
 * @param uuid - the uuid of the player.
 * @param style - the style to select.
 * @returns
 */
const selectSingleStyle = (uuid: string, style: string) =>
  Query(`
  SELECT * FROM _${uuid}_styles WHERE style_name = ${style}
  `);

/**
 * Used to return the unlocked items for the all styles
 * @param uuid - the uuid of the player.
 * @returns
 */
const selectAllStyles = (uuid: string) =>
  Query(`
SELECT * FROM _${uuid}_styles;
`);

/**
 * Used to add a new style to the uuid-styles table for each player
 * @param uuidArray Array of player uuid strings
 * @param style the new style
 * @returns
 */
const addNewStyle = (uuidArray: string[], style: string) =>
  Query(
    `
    ${uuidArray
      .map((uuid) => {
        `INSERT INTO _${uuid}_styles 
        (style_name, axes, belts, boots, bows, chests, daggers, gloves, helmets, legs, maces, shields, shoulders, staves, swords, all_owned)
        VALUES (${style}, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)`;
      })
      .toString()}
      `
  );

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
