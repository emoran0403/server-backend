import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/traits
  app.use("/traits", route);

  route.get("/one", controllers.traits.getOneTrait); // done testing

  route.get("/all", controllers.traits.getAlltraits); // done testing

  route.put("/update", controllers.traits.updateTrait); // done testing
}
