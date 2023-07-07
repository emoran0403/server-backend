import config from "../config";
import * as postgres from "pg";
import { get } from "../loaders/postgresql";

interface QueryResultExtended extends postgres.QueryResult {
  length?: number;
  affectedRows?: number;
}

export const Query = <T = QueryResultExtended>(query: string, values: unknown[] = []) => {
  return new Promise<T>((resolve, reject) => {
    get().query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.command === "SELECT") {
          resolve(results.rows as unknown as T);
        } else {
          // console.log({ results });
          resolve({ ...results, affectedRows: results.rowCount } as unknown as T);
        }
      }
    });
  });
};
