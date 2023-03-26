import { queries } from "../../../db/schemas/esoapp";

const updateStyle = async (reqDTO: any) => {
  const { uuid, style, itemValues } = reqDTO;
  const results = await queries.styles.updateStylesTable(uuid, style, itemValues);
  return results.affectedRows;
};

export const styles = {
  updateStyle,
};
