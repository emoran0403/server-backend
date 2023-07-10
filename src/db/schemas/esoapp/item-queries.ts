import { Query, QueryResultExtended } from "../../query";

const makeItemTable = () => {
  const numMotifs = 150;
  const motifs = Array.from({ length: numMotifs }, (_, i) => `motif_${i + 1} BOOLEAN`).join(",");

  const query = `
          CREATE TABLE axes_table (
            entry_id SERIAL PRIMARY KEY,
            player_uuid UUID,
            Powered Boolean,
            Charged Boolean,
            Precise Boolean,
            Infused Boolean,
            Defending Boolean,
            Training Boolean,
            Sharpened Boolean,
            Decisive Boolean,
            Nirnhoned Boolean,
            ${motifs}
          );
        `;

  return Query(query);
};

const insertPlayerData = (tableName: string, playerUUID: string, traits: string[]): Promise<QueryResultExtended> => {
  const numMotifs: number = 150;

  const traitColumns: string = traits.join(", ");
  const motifColumns: string = Array.from({ length: numMotifs }, (_, i) => `motif_${i + 1}`).join(", ");
  const falseValues: string = Array.from({ length: traits.length + numMotifs }, () => "false").join(", ");

  const query: string = `
      INSERT INTO ${tableName} (player_uuid, ${traitColumns}, ${motifColumns})
      VALUES ('${playerUUID}', ${falseValues});
    `;

  return Query(query);
};

export default {
  makeItemTable,
  insertPlayerData,
};
