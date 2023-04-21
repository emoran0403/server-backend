import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { reqDTO } from "../index";

const updateStyle = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * make this also check and update all owned as well
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
    if (results.affectedRows) return res.json({ message: "New style added successfully!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

const makeBigStyleTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await services.styles.makeBigStyleTable();
    console.log("results", results);
    if (results) return res.json({ message: "Successfully made styles table!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

const fillBigStyleTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: reqDTO = { ...req.body };
    const results = await services.styles.fillBigStyleTable(reqDTO);
    console.log("results", results);
    if (results) return res.json({ message: "Successfully filled styles table!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

export const styles = {
  updateStyle,
  getOneStyle,
  getAllStyles,
  addNewStyle,
  makeBigStyleTable,
  fillBigStyleTable,
};
