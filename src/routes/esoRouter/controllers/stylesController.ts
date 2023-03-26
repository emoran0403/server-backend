import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { reqDTO } from "../index";

const setupStyles = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * generate player styles table query
   * fill player styles query
   */
  try {
    const reqDTO: reqDTO = { ...req.body };
  } catch (error) {
    next(error);
  }
};

const updateStyle = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * updateStylesTable query
   */
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.styles.updateStyle(reqDTO);
    if (results) return res.json({ message: `Style updated!` });
    res.status(400).json({ message: `Could not update Style` });
  } catch (error) {
    next(error);
  }
};

const getOneStyle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.styles.getOneStyle(reqDTO);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const getAllStyles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.styles.getAllStyles(reqDTO);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const addNewStyle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.styles.addNewStyle(reqDTO);
    if (results) return res.json({ message: "New style added successfully!" });
  } catch (error) {
    next(error);
  }
};

export const styles = {
  setupStyles,
  updateStyle,
  getOneStyle,
  getAllStyles,
  addNewStyle,
};
