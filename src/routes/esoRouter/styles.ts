import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/styles
  app.use("/styles", route);

  route.get("/one", controllers.styles.getOneStyle);

  route.get("/all", controllers.styles.getAllStyles);

  route.put("/update", controllers.styles.updateStyle);

  route.post("/new", controllers.styles.addNewStyle);
}
