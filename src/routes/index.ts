import { Router } from "express";

import joinUsRouter from "./join-us";
import esoappRouter from "./esoRouter";

export default function () {
  const app = Router();

  // add more routers for additional projects
  joinUsRouter(app);
  esoappRouter(app);

  return app;
}
