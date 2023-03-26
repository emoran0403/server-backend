import { Query } from "../../query";
import { ALL_APPAREL_LIST, ALL_JEWLERY_LIST, ALL_WEAPON_LIST, CRAFTABLES, FALSE10, TRAITS } from "./constants";
import { all_item_list, tables, trait_values } from "./models";

/**
 * Used to generate the armor trait table for a player
 * @param uuid _ the uuid of the player.
 * @returns
 */
// const genArmorTraitTable = (uuid: string) =>
//   Query(`
// CREATE TABLE ${uuid}_armor_traits (
//     armor_name TEXT,
//     Sturdy BOOLEAN,
//     Impenetrable BOOLEAN,
//     Reinforced BOOLEAN,
//     Wellfitted BOOLEAN,
//     Training BOOLEAN,
//     Infused BOOLEAN,
//     Invigorating BOOLEAN,
//     Divines BOOLEAN,
//     Nirnhoned BOOLEAN,
//     all_owned BOOLEAN
//     );
// `);

/**
 * Used to populate a player's armor trait table with the initial false values.  This will need to be run once when player is first created.
 * @param uuid _ the uuid of the player.
 * @returns
 */
// const fillArmorTraits = (uuid: string) =>
//   Query(`
// INSERT INTO ${uuid}_armor_traits (armor_name, Sturdy, Impenetrable, Reinforced, Wellfitted, Training, Infused, Invigorating, Divines, Nirnhoned, all_owned)
// VALUES (${ALL_APPAREL_LIST.map((item) => `(${item}, false, false, false, false, false, false, false, false, false, false)`).toString()});
// `);

/**
 * Used to generate the jewelry trait table for a player
 * @param uuid _ the uuid of the player.
 * @returns
 */
// const genJewelryTraitTable = (uuid: string) =>
//   Query(`
//   CREATE TABLE ${uuid}_jewelry_traits (
//     jewelry_name TEXT,
//     Healthy BOOLEAN,
//     Arcane BOOLEAN,
//     Robust BOOLEAN,
//     Bloodthirsty BOOLEAN,
//     Harmony BOOLEAN,
//     Infused BOOLEAN,
//     Triune BOOLEAN,
//     Protective BOOLEAN,
//     Swift BOOLEAN,
//     all_owned BOOLEAN
//     );
// `);

/**
 * Used to populate a player's jewelry trait table with the initial false values.  This will need to be run once when player is first created.
 * @param uuid _ the uuid of the player.
 * @returns
 */
// const fillJewelryTraits = (uuid: string) =>
//   Query(`
//   INSERT INTO ${uuid}_jewelry_traits (jewelry_name, Healthy, Arcane, Robust, Bloodthirsty, Harmony, Infused, Triune, Protective, Swift, all_owned)
//   VALUES (${ALL_JEWLERY_LIST.map((item) => `(${item}, false, false, false, false, false, false, false, false, false, false)`).toString()};
// `);

/**
 * Used to generate the weapon trait table for a player
 * @param uuid _ the uuid of the player.
 * @returns
 */
// const genWeaponTraitTable = (uuid: string) =>
//   Query(`
// CREATE TABLE ${uuid}_weapon_traits (
//     weapon_name TEXT,
//     Powered BOOLEAN,
//     Charged BOOLEAN,
//     Precise BOOLEAN,
//     Infused BOOLEAN,
//     Defending BOOLEAN,
//     Training BOOLEAN,
//     Sharpened BOOLEAN,
//     Decisive BOOLEAN,
//     Nirnhoned BOOLEAN,
//     all_owned BOOLEAN
//     );
// `);

/**
 * Used to populate a player's weapon trait table with the initial false values.  This will need to be run once when player is first created.
 * @param uuid _ the uuid of the player.
 * @returns
 */
// const fillWeaponTraits = (uuid: string) =>
//   Query(
//     `
// INSERT INTO ${uuid}_weapon_traits (weapon_name, Powered, Charged, Precise, Infused, Defending, Training, Sharpened, Decisive, Nirnhoned, all_owned)
// VALUES (${ALL_WEAPON_LIST.map((item) => `(${item}, false, false, false, false, false, false, false, false, false, false)`).toString()};
//     `
//   );

/**
 * Used to generate any trait table for a player
 * @param player_uuid player uuid
 * @param table the name of the table to generate "jewelry" | "weapon" | "armor"
 */
const genAnyTraitTable = (player_uuid: string, table: tables) =>
  Query(
    `
    CREATE TABLE _${player_uuid}_${table.toLowerCase()}_traits (
        ${table}_name TEXT,
        ${TRAITS[`${table.toUpperCase()}_TRAITS`].map((item) => `${item} BOOLEAN`).toString()},
        all_owned BOOLEAN
        );
    `
  );

/**
 * Used to fill any trait table for a player with false values
 * @param player_uuid player uuid
 * @param table the name of the table to generate "jewelry" | "weapon" | "armor"
 */
const fillAnyTraitTable = (player_uuid: string, table: tables) =>
  Query(
    `
    INSERT INTO _${player_uuid}_${table}_traits (${table}_name, ${TRAITS[`${table.toLocaleUpperCase()}_TRAITS`].toString()}, all_owned)
    VALUES (${CRAFTABLES[`${table.toLocaleUpperCase()}`].map((item) => `(${item}, ${FALSE10}.toString())`).toString()};
    `
  );

/**
 * Used to update a specified trait table
 * @param player_uuid player uuid
 * @param table the name of the table to generate "jewelry" | "weapon" | "armor"
 * @param traitValues tuple array containing arrays of ['trait', 'true || false']
 */
const updateAnyTraitTable = (player_uuid: string, table: tables, traitValues: trait_values[]) =>
  Query(
    `
          UPDATE _${player_uuid}_${table}_traits
          SET ${traitValues.map(([trait, value]) => `${trait} = ${value}`).toString()}
          WHERE ${table}_traits = ${table}_name;
    `
  );

/**
 * Used to select a single item from a specified trait table
 * @param player_uuid player uuid
 * @param table the name of the table to select from "jewelry" | "weapon" | "armor"
 * @param item any craftable item: all_item_list
 */
const selectSingleFromTraitTable = (player_uuid: string, table: tables, item: all_item_list) =>
  Query(
    `
    SELECT * FROM _${player_uuid}_${table}_traits WHERE ${table}_name = '${item}';
    `
  );

/**
 * Used to select all items from a specified trait table
 * @param player_uuid player uuid
 * @param table the name of the table to select from "jewelry" | "weapon" | "armor"
 */
const selectAllFromTraitTable = (player_uuid: string, table: tables) =>
  Query(
    `
    SELECT * FROM _${player_uuid}_${table}_traits;
    `
  );

export default {
  genAnyTraitTable,
  fillAnyTraitTable,
  updateAnyTraitTable,
  selectSingleFromTraitTable,
  selectAllFromTraitTable,
  // genArmorTraitTable,
  // fillArmorTraits,
  // genWeaponTraitTable,
  // fillWeaponTraits,
  // genJewelryTraitTable,
  // fillJewelryTraits,
};

/**
 * generate a trait table for a player
 * fill a trait table for a player with default values
 * update a trait table
 * select a trait table for a player
 */
