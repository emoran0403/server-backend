import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/styles
  app.use("/styles", route);

  route.get("/one", controllers.styles.getOneStyle); // done testing

  route.get("/all", controllers.styles.getAllStyles); // done testing

  route.put("/update", controllers.styles.updateStyle); // done testing

  route.post("/new", controllers.styles.addNewStyle); //! should not be needed often

  // route.post("/generate", controllers.styles.makeBigStyleTable); // done testing

  route.post("/fill", controllers.styles.fillBigStyleTable); // done testing
}
