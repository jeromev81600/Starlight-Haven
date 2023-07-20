const AbstractManager = require("./AbstractManager");

class BackpackManager extends AbstractManager {
  constructor() {
    super({ table: "backpack" });
  }

  findBackPacksByBivouac(id) {
    return this.database.query(
      ` SELECT bck.type AS BackpackType, bck.volumemin, bck.volumemax, bck.weight, bck.payload, bck.description, bck.url, bc.type AS BivouacType
      FROM ${this.table} bck 
      JOIN backpack_has_bivouac bhb ON bck.id = bhb.backpack_id
      JOIN bivouac bc ON bc.id = bhb.bivouac_id
      WHERE bc.id = ?`,
      [id]
    );
  }

  insert(backpack) {
    const { type, volumemin, volumemax, weight, payload, description, url } =
      backpack;
    return this.database.query(
      `insert into ${this.table} (type,volumemin,volumemax, weight,payload,description,url) values (?,?,?,?,?,?,?)`,
      [type, volumemin, volumemax, weight, payload, description, url]
    );
  }

  update(backpack, id) {
    const { type, volumemin, volumemax, weight, payload, description, url } =
      backpack;
    return this.database.query(
      `update ${this.table} set type = ?, volumemin = ?,volumemax = ?, weight = ?,payload = ?,description = ?, url = ? where id = ?`,
      [type, volumemin, volumemax, weight, payload, description, url, id]
    );
  }
}

module.exports = BackpackManager;
