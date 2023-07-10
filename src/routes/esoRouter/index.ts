import { Router } from "express";
import authRouter from "./auth";
import writRouter from "./writs";
import stylesRouter from "./styles";
import traitsRouter from "./traits";
import oneTimeRouter from "./oneTime";

export default function (app: Router) {
  const route = Router();
  app.use("/esoapp", route);

  authRouter(route);
  writRouter(route);
  stylesRouter(route);
  traitsRouter(route);
  oneTimeRouter(route);

  return route;
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
