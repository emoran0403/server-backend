import { Query } from "../../query";
import { ALL_APPAREL_LIST, ALL_JEWLERY_LIST, ALL_WEAPON_LIST, CRAFTABLES, FALSE10, TRAITS } from "./constants";
import { all_item_list, tables, trait_values } from "./models";

/**
 * Used to generate any trait table for a player
 * @param player_uuid player uuid
 * @param table the name of the table to generate "jewelry" | "weapon" | "armor"
 */
const genAnyTraitTable = (player_uuid: string, table: tables) =>
  Query(
    `
    CREATE TABLE _${player_uuid.toString()}_${table.toLowerCase()}_traits (
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
    INSERT INTO _${player_uuid.toString()}_${table}_traits (${table}_name, ${TRAITS[`${table.toLocaleUpperCase()}_TRAITS`].toString()}, all_owned)
    VALUES (${CRAFTABLES[`${table.toLocaleUpperCase()}`].map((item) => `(${item}, ${FALSE10}.toString())`).toString()};
    `
  );

/**
 * Used to update a specified trait table
 * @param player_uuid player uuid
 * @param table the name of the table to generate "jewelry" | "weapon" | "armor"
 * @param traitValues tuple array containing arrays of ['trait', 'true || false']
 */
const updateAnyTraitTable = (player_uuid: string, table: tables, traitValues: trait_values[], item: all_item_list) =>
  Query(
    `
          UPDATE _${player_uuid.toString()}_${table}_traits
          SET ${traitValues.map(([trait, value]) => `${trait} = ${value}`).toString()}
          WHERE ${table}_name = '${item}';
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
    SELECT * FROM _${player_uuid.toString()}_${table}_traits WHERE ${table}_name = '${item}';
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
    SELECT * FROM _${player_uuid.toString()}_${table}_traits;
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
