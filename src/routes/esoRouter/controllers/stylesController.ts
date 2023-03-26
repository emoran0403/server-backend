import { Request, Response, NextFunction } from "express";
import { services } from "../services";

const setupStyles = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * generate player styles table query
   * fill player styles query
   */
  try {
    const reqDTO = { ...req.body };
  } catch (error) {
    next(error);
  }
};

const updateStyle = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * updateStylesTable query
   */
  try {
    const reqDTO = { ...req.body };
    const results = await services.styles.updateStyle(reqDTO);
    if (results) res.json({ message: `Style updated!` });
    res.status(400).json({ message: `Could not update Style` });
  } catch (error) {
    next(error);
  }
};

const getOneStyle = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * get one query
   */
  try {
    const reqDTO = { ...req.body };
  } catch (error) {
    next(error);
  }
};

const getAllStyles = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * get all query
   */
  try {
    const reqDTO = { ...req.body };
  } catch (error) {
    next(error);
  }
};

const addNewStyle = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * add new style query
   */
  try {
    const reqDTO = { ...req.body };
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
