import { Query } from "../../query";
import authQueries from "./auth-queries";
import styleQueries from "./style-queries";
import traitQueries from "./trait-queries";
import writQueries from "./writ-queries";

export const queries = {
  auth: authQueries,
  styles: styleQueries,
  traits: traitQueries,
  writs: writQueries,
};
