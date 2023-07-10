import { Request, Response, NextFunction } from "express";
import { services } from "../services";

const makeItemTables = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: any = { ...req.body, ...req.headers };

    const results = await services.setup.makeItemTables(reqDTO);

    console.log("setup results: ", results);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const setup = {
  makeItemTables,
};
