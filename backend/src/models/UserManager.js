const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    const {
      firstname,
      lastname,
      email,
      phone,
      preferences,
      hashedPassword,
      backpackId,
    } = user;
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email,phone, preferences,hashedpassword,backpack_id) values (?)`,
      [
        firstname,
        lastname,
        email,
        phone,
        preferences,
        hashedPassword,
        backpackId,
      ]
    );
  }

  update(user, id) {
    const {
      firstname,
      lastname,
      email,
      phone,
      preferences,
      hashedPassword,
      backpackId,
    } = user;
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [
        firstname,
        lastname,
        email,
        phone,
        preferences,
        hashedPassword,
        backpackId,
        id,
      ]
    );
  }
}

module.exports = UserManager;
