import { Request, Response, NextFunction } from "express";
import { services } from "../services";
import { isNil, isUndefined } from "lodash";

const getAllWrits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: any = { ...req.body, ...req.headers };

    const writList = await services.writs.getAllWrits(reqDTO);
    const traitList = await services.traits.getAllTraits(reqDTO);
    const styleList = await services.styles.getAllStyles(reqDTO);

    const updatedWrits = writList.map((writ) => {
      const { item, style, is_jewelery } = writ;
      const hasValidStyle = !is_jewelery && !(isNil(style) || !isUndefined(style));
      return {
        ...writ,
        hasTrait: services.traits.hasTrait(traitList, item),
        hasArmorSet: services.traits.hasArmorSet(traitList, item),
        hasStyle: hasValidStyle ? services.styles.hasStyle(styleList, item, style, is_jewelery) : null,
      };
    });

    /**
     * !?! This needs to be adjusted to add
     * hasTrait: boolean;
     * hasArmorSet: boolean;
     * hasStyle: boolean;
     *
     * constants has the traits required for the armor set
     *
     *
     *
     * get all writs
     * get all styles
     * get all traits
     *
     * iterate over all writs, and append the following to the writ object properties
     *
     * hasTrait:
     * get the item from the writ
     * iterate over traits and determine if the trait is learned on the item
     *
     * hasStyle:
     * get the item from the writ
     * iterate over styles and determine if the style is learned for the item
     * unlocks object is needed to turn style into individual item for matching
     *
     * hasArmorSet:
     * get item from the writ
     * count the number of true traits for the item
     * must meet or exceed the number on traits needed object
     *
     */

    console.log("getAllWrits: ", writList);
    res.status(200).json(updatedWrits);
  } catch (error) {
    next(error);
  }
};

const updateWrit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: any = { ...req.body, ...req.headers };
    // const { player_uuid, writ_uuid, completion } = reqDTO;

    const results = await services.writs.updateWrit(reqDTO);

    if (results) return res.json({ message: `Updated Writ` });

    res.status(400).json({ message: `Could not update Writ` });
  } catch (error) {
    next(error);
  }
};

const newWrit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqDTO: any = { ...req.body, ...req.headers };
    console.log("new writ reqDTO", reqDTO);

    const results = await services.writs.newWrit(reqDTO);
    if (isNil(results)) return res.status(500).json({ message: "Error saving new Writ" });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

const makeBigWritTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await services.writs.makeBigWritTable();
    console.log("results", results);
    if (results) return res.json({ message: "Successfully made writs table!" });
    return res.json({ message: "Something went wrong!" });
  } catch (error) {
    next(error);
  }
};

export const writs = {
  getAllWrits,
  updateWrit,
  newWrit,
  makeBigWritTable,
};
