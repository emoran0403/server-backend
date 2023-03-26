import { Router } from "express";
import authRouter from "./auth";
import writRouter from "./writs";
import stylesRouter from "./styles";
import traitsRouter from "./traits";
import { all_item_list, item_values, styles, tables, trait_values, trueFalseString, writ } from "../../db/schemas/esoapp/models";

export default function (app: Router) {
  const route = Router();
  app.use("/esoapp", route);

  authRouter(route);
  writRouter(route);
  stylesRouter(route);
  traitsRouter(route);

  return route;
}

export interface reqDTO {
  player_uuid?: string;
  writ_uuid?: string;
  completion?: trueFalseString;
  writ?: writ;
  is_jewelry?: boolean;
  username?: string;
  plainTextPassword?: string;
  style?: styles;
  itemValues?: item_values[];
  uuidArray?: string[];
  table?: tables;
  item?: all_item_list;
  traitValues: trait_values[];
}

// route.get("/route", async (req, res, next) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// });
// route.post("/route", async (req, res, next) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// });
// route.put("/route", async (req, res, next) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// });
// route.delete("/route", async (req, res, next) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// });
