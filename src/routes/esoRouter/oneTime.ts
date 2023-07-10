import { Router } from "express";
import { controllers } from "./controllers";

export interface player {
  player_uuid: number;
  user_name: string;
  user_password: string;
  created_at: string;
}

export default function (app: Router) {
  const route = Router();
  //************************************ /dev/esoapp/onetime
  app.use("/onetime", route);

  route.get("/run", controllers.setup.makeItemTables);
}
