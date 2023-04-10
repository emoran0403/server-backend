import { Query } from "../../query";
import { trueFalseString, writ } from "./models";

/**
 * Used to generate a player's writ table
 * @param player_uuid player uuid
 */
const genWritTable = (player_uuid: string) =>
  Query(
    `
    CREATE TABLE _${player_uuid.toString()}_writs (
        writ_uuid SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        item TEXT,
        quality TEXT,
        trait TEXT,
        set TEXT,
        style TEXT DEFAULT NULL,
        is_jewelry BOOLEAN,
        reward INTEGER,
        completed BOOLEAN DEFAULT false
      );    
    `
  );
/**
 * Used to add a writ to the player's writ table
 * @param player_uuid player uuid
 * @param writ - the writ the player is adding
 */
const addWrit = (player_uuid: string, { item, quality, trait, set, style, reward }: writ, is_jewelry: boolean) =>
  Query(
    `
       INSERT INTO _${player_uuid.toString()}_writs (item, quality, trait, set, style, is_jewelry, reward)
       VALUES ('${item}', '${quality}', '${trait}', '${set}', '${style}', ${is_jewelry}, ${reward});    
    `
  );
/**
 * Used to update the completed status of a writ to true
 * @param player_uuid player uuid
 * @param writ_uuid writ uuid
 */
const setCompletion = (player_uuid: string, writ_uuid: string, completion: trueFalseString) =>
  Query(
    `
        UPDATE _${player_uuid.toString()}_writs
        SET completed = ${completion}
        WHERE writ_uuid = '${writ_uuid}'; 
    `
  );
/**
 * Used to select a single writ
 * @param player_uuid player uuid
 * @param writ_uuid writ uuid
 */
const selectWrit = (player_uuid: string, writ_uuid: string) =>
  Query(
    `
       SELECT * FROM _${player_uuid.toString()}_writs WHERE writ_uuid = ${writ_uuid}; 
    `
  );
/**
 * Used to select all of a player's writs
 * @param player_uuid
 */
const selectAllWrits = (player_uuid: string) =>
  Query(
    `
         SELECT * FROM _${player_uuid.toString()}_writs; 
      `
  );
export default {
  genWritTable,
  addWrit,
  setCompletion,
  selectWrit,
  selectAllWrits,
};

/**
 * create table
 * add writs
 * update writs on table (complete a writ)
 * select writ(s)
 */
