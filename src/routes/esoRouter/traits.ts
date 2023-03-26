import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/traits
  app.use("/traits", route);
}
