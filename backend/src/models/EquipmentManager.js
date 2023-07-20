const AbstractManager = require("./AbstractManager");

class EquipmentManager extends AbstractManager {
  constructor() {
    super({ table: "equipment" });
  }

  insert(equipment) {
    const { equipmentname, weight, volume, userId, type, url, description } =
      equipment;
    return this.database.query(
      `insert into ${this.table} (equipmentname,weight,volume,user_id,type,url,description) values (?,?,?,?,?,?,?)`,
      [equipmentname, weight, volume, userId, type, url, description]
    );
  }

  update(equipment, id) {
    const { equipmentname, weight, volume, userId, type, url, description } =
      equipment;
    return this.database.query(
      `update ${this.table} set equipmentname = ?, weight = ?,volume = ?, userId = ?, type = ?,url = ?, description = ? where id = ?`,
      [equipmentname, weight, volume, userId, type, url, description, id]
    );
  }
}

module.exports = EquipmentManager;
