const AbstractManager = require("./AbstractManager");

class BackpackManager extends AbstractManager {
  constructor() {
    super({ table: "backpack" });
  }

  insert(backpack) {
    const { type, volumemin, volumemax, weight, payload, description } =
      backpack;
    return this.database.query(
      `insert into ${this.table} (type,volumemin,volumemax, weight,payload,description) values (?,?,?,?,?,?)`,
      [type, volumemin, volumemax, weight, payload, description]
    );
  }

  update(backpack, id) {
    const { type, volumemin, volumemax, weight, payload, description } =
      backpack;
    return this.database.query(
      `update ${this.table} set type = ?, volumemin = ?,volumemax = ?, weight = ?,payload = ?,description = ? where id = ?`,
      [type, volumemin, volumemax, weight, payload, description, id]
    );
  }
}

module.exports = BackpackManager;
