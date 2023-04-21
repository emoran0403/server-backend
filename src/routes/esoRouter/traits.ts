import { Router } from "express";
import { controllers } from "./controllers";

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/traits
  app.use("/traits", route);

  route.get("/all", controllers.traits.getAlltraits); // done testing

  route.put("/update", controllers.traits.updateTrait); // done testing

  route.post("/generate", controllers.traits.makeBigTraitTable); // done testing

  route.post("/fill", controllers.traits.fillBigTraitTable); // done testing
}
