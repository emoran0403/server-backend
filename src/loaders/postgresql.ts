import config from "../config";
import * as postgres from "pg";

const Connection_postgres = new postgres.Pool(config.postgres);
// export const Connection_postgres = new postgres.Pool(config.postgres);

const state = {
  pool: null,
};

export function get() {
  return state.pool;
}

export default async function () {
  state.pool = Connection_postgres;
}
