import { queries } from "../../../db/schemas/esoapp";
import { ALL_APPAREL_LIST, ALL_JEWLERY_LIST, ALL_WEAPON_LIST, ARMOR_TRAITS, JEWELERY_TRAITS, WEAPON_TRAITS } from "../../../db/schemas/esoapp/constants";
import { db_list_response, reqDTO } from "../../../db/schemas/esoapp/models";

const getAllTraits = async (reqDTO: reqDTO): Promise<db_list_response[]> => {
  const { player_uuid } = reqDTO;
  const results = await queries.traits.selectAllFromTraitTable(player_uuid);
  return results;
};

const updateTrait = async (reqDTO: reqDTO) => {
  // console.log("From Server...");
  // console.log("reqDTO: ", reqDTO);
  const { player_uuid, item, trait, completion } = reqDTO;
  // console.log({ player_uuid, item, trait, completion });
  const column = `${item.toLocaleLowerCase()}_${trait.replace(/ /g, "_").toLocaleLowerCase()}`;
  const results = await queries.traits.updateAnyTraitTable(player_uuid, column, completion);
  return results;
};

const makeBigTraitTable = async () => {
  let traitItems = [];

  for (let i = 0; i < ALL_WEAPON_LIST.length; i++) {
    const item = ALL_WEAPON_LIST[i].replace(/ /g, "_").toLocaleLowerCase();
    for (let j = 0; j < WEAPON_TRAITS.length; j++) {
      const trait = WEAPON_TRAITS[j].toLocaleLowerCase();

      traitItems.push(`${item}_${trait} BOOLEAN DEFAULT FALSE`);
    }
  }

  for (let k = 0; k < ALL_APPAREL_LIST.length; k++) {
    const item = ALL_APPAREL_LIST[k].replace(/ /g, "_").toLocaleLowerCase();
    for (let l = 0; l < ARMOR_TRAITS.length; l++) {
      const trait = ARMOR_TRAITS[l].toLocaleLowerCase();

      traitItems.push(`${item}_${trait} BOOLEAN DEFAULT FALSE`);
    }
  }

  for (let m = 0; m < ALL_JEWLERY_LIST.length; m++) {
    const item = ALL_JEWLERY_LIST[m].replace(/ /g, "_").toLocaleLowerCase();
    for (let n = 0; n < JEWELERY_TRAITS.length; n++) {
      const trait = JEWELERY_TRAITS[n].toLocaleLowerCase();

      traitItems.push(`${item}_${trait} BOOLEAN DEFAULT FALSE`);
    }
  }

  // console.log("traitItems", traitItems);

  const results = await queries.traits.makeBigTraitTable(traitItems);
  return results;
};

const fillBigTraitTable = async (reqDTO: reqDTO) => {
  const { player_uuid } = reqDTO;

  const results = await queries.traits.fillBigTraitTable(player_uuid);
  return results;
};

const hasTrait = (traitArray: db_list_response[], item: string): boolean => {
  console.log("item: ", item);
  return true;
};

const hasArmorSet = (traitArray: db_list_response[], item: string): boolean => {
  return true;
};
export const traits = {
  makeBigTraitTable,
  fillBigTraitTable,
  getAllTraits,
  updateTrait,
  hasTrait,
  hasArmorSet,
};
