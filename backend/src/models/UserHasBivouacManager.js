const AbstractManager = require("./AbstractManager");

class UserHasBivouacManager extends AbstractManager {
  constructor() {
    super({ table: "user_has_bivouac" });
  }

  insert(userHasBivouac) {
    const { userId, bivouacId } = userHasBivouac;
    return this.database.query(
      `insert into ${this.table} (user_id ,bivouac_id) values (?,?)`,
      [userId, bivouacId]
    );
  }

  update(userHasBivouac) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [userHasBivouac.title, userHasBivouac.id]
    );
  }
}

module.exports = UserHasBivouacManager;
