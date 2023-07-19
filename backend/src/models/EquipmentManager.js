const AbstractManager = require("./AbstractManager");

class EquipmentManager extends AbstractManager {
  constructor() {
    super({ table: "equipment" });
  }

  insert(equipment) {
    const { equipmentname, weight, volume, userId, type, description } =
      equipment;
    return this.database.query(
      `insert into ${this.table} (equipmentname,weight,volume,user_id,type,description) values (?,?,?,?,?,?)`,
      [equipmentname, weight, volume, userId, type, description]
    );
  }

  update(equipment, id) {
    const { equipmentname, weight, volume, userId, type, description } =
      equipment;
    return this.database.query(
      `update ${this.table} set equipmentname = ?, weight = ?,volume = ?, userId = ?, type = ?, description = ? where id = ?`,
      [equipmentname, weight, volume, userId, type, description, id]
    );
  }
}

module.exports = EquipmentManager;
