import { Query } from "../../query";

export interface player {
  player_uuid: number;
  user_name: string;
  user_password: string;
  created_at: string;
}

/**
 * Used to look up a player by their username
 * @param username
 * @returns
 */
const findPlayer = (username: string) => Query<player[]>("SELECT * FROM players WHERE user_name = $1;", [username]);

/**
 * Used to look up all players
 * @returns An arry of all players
 */
const findAllPlayers = () => Query<player[]>("SELECT * FROM players;");

/**
 * Used to create a new player entry in the database, returning the player's uuid
 * @param username
 * @param password
 * @returns
 */
const newPlayer = (username: string, password: string) =>
  Query("INSERT INTO players (user_name, user_password) VALUES ($1, $2) RETURNING *;", [username, password]);

export default {
  findPlayer,
  findAllPlayers,
  newPlayer,
};
