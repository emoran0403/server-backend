import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/writs
  app.use("/writs", route);

  route.get("/one", controllers.writs.getOneWrit); // done testing

  route.get("/all", controllers.writs.getAllWrits); // done testing

  route.put("/update", controllers.writs.updateWrit); // done testing

  route.post("/new", controllers.writs.newWrit); // done testing
}
