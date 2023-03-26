import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/styles
  app.use("/styles", route);

  route.get("/one", controllers.writs.getOneWrit);

  route.get("/all", controllers.writs.getAllWrits);

  route.put("/update", controllers.writs.updateWrit);

  route.post("/new", controllers.writs.newWrit);
}
