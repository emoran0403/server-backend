import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/writs
  app.use("/writs", route);

  route.get("/all", controllers.writs.getAllWrits);

  route.put("/update", controllers.writs.updateWrit);

  route.post("/new", controllers.writs.newWrit);

  route.post("/generate", controllers.writs.makeBigWritTable);
}
