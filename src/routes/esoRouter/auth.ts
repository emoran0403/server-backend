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
  //************************************ /dev/esoapp/users
  app.use("/users", route);

  route.get("/one", controllers.auth.getOnePlayer); // done testing

  route.get("/all", controllers.auth.getAllPlayers); // done testing

  route.post("/new", controllers.auth.newPlayer); // done testing
}
