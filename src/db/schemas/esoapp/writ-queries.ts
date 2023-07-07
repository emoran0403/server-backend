import { Query } from "../../query";
import { trueFalseString, writ } from "./models";

/**
 * Used to add a writ to the player's writ table
 * @param player_uuid player uuid
 * @param writ - the writ the player is adding
 */
const addWrit = (player_uuid: string, { item, quality, trait, set, style, reward }: writ, is_jewelery: boolean) =>
  Query(
    `
       INSERT INTO player_writs (player_uuid, item, quality, trait, set, style, is_jewelery, reward)
       VALUES ('${player_uuid}', '${item}', '${quality}', '${trait}', '${set}', '${style}', ${is_jewelery}, ${reward});    
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
        UPDATE player_writs
        SET completed = ${completion}
        WHERE writ_uuid = '${writ_uuid}' AND player_uuid = '${player_uuid}'; 
    `
  );

/**
 * Used to select all of a player's writs
 * @param player_uuid
 */
const selectAllWrits = (player_uuid: string) =>
  Query(
    `
         SELECT * FROM player_writs WHERE player_uuid = '${player_uuid}'; 
      `
  );

const makeBigWritTable = () =>
  Query(`
  CREATE TABLE player_writs
  (
      writ_uuid SERIAL PRIMARY KEY,
      player_uuid TEXT,         
      created_at TIMESTAMPTZ DEFAULT NOW(),
      item TEXT,
      quality TEXT,
      trait TEXT,
      set TEXT,
      style TEXT DEFAULT NULL,
      is_jewelery BOOLEAN,
      reward INTEGER,
      completed BOOLEAN DEFAULT false
    );
    `);

export default {
  addWrit,
  setCompletion,
  selectAllWrits,
  makeBigWritTable,
};
