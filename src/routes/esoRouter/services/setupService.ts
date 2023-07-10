import { queries } from "../../../db/schemas/esoapp";
import { reqDTO } from "../../../db/schemas/esoapp/models";

const makeItemTables = async (reqDTO: reqDTO): Promise<void> => {
  await queries.items.makeItemTable();
};

export const setup = {
  makeItemTables,
};
