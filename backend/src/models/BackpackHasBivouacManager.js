const AbstractManager = require("./AbstractManager");

class BackpackHasBivouacManager extends AbstractManager {
  constructor() {
    super({ table: "backpack_has_bivouac" });
  }

  insert(backpackHasBivouac) {
    const { backpackId, bivouacId } = backpackHasBivouac;
    return this.database.query(
      `insert into ${this.table} (backpack_id, bivouac_id) values (?,?)`,
      [backpackId, bivouacId]
    );
  }

  update(backpackHasBivouac) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [backpackHasBivouac.title, backpackHasBivouac.id]
    );
  }
}

module.exports = BackpackHasBivouacManager;
