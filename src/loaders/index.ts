import expressLoader from "./express";
import postgresqlLoader from "./postgresql";
import type { Express } from "express";

export default async function ({ app }: { app: Express }) {
  await postgresqlLoader();
  console.log("postgresql loaded");

  await expressLoader({ app });
  console.log("express loaded");
}
