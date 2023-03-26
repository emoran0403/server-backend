import { Query } from "../../query";
import { trueFalseString, writ } from "./models";

/**
 * Used to generate a player's writ table
 * @param uuid player uuid
 */
const genWritTable = (uuid: string) =>
  Query(
    `
    CREATE TABLE _${uuid.toString()}_writs (
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
 * @param uuid player uuid
 * @param writ - the writ the player is adding
 */
const addWrit = (uuid: string, { item, quality, trait, set, style, reward }: writ, is_jewelry: boolean) =>
  Query(
    `
       INSERT INTO _${uuid.toString()}_writs (item, quality, trait, set, style, is_jewelry, reward)
       VALUES ('${item}', '${quality}', '${trait}', '${set}', '${style}', ${is_jewelry}, ${reward});    
    `
  );
/**
 * Used to update the completed status of a writ to true
 * @param uuid player uuid
 * @param writ_uuid writ uuid
 */
const setCompletion = (uuid: string, writ_uuid: string, completion: trueFalseString) =>
  Query(
    `
        UPDATE _${uuid}_writs
        SET completed = ${completion}
        WHERE writ_uuid = '${writ_uuid}'; 
    `
  );
/**
 * Used to select a single writ
 * @param uuid player uuid
 * @param writ_uuid writ uuid
 */
const selectWrit = (uuid: string, writ_uuid: string) =>
  Query(
    `
       SELECT * FROM _${uuid}_writs WHERE writ_uuid = ${writ_uuid}; 
    `
  );
/**
 * Used to select all of a player's writs
 * @param uuid
 */
const selectAllWrits = (uuid: string) =>
  Query(
    `
         SELECT * FROM _${uuid}_writs; 
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
