import { Router } from "express";
import { controllers } from "./controllers";
import passport from "passport";

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

  route.get("/one", controllers.auth.getOnePlayer);

  route.get("/all", controllers.auth.getAllPlayers);

  route.post("/new", controllers.auth.newPlayer);

  route.post("/checkToken", passport.authenticate("jwt", { session: false }), controllers.auth.checkToken);

  route.post("/login", passport.authenticate("local", { session: false }), controllers.auth.login);
}
