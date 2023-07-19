/* eslint-disable camelcase */
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
      hashed_password,
      admin_credentials,
      backpackId,
    } = user;
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email,phone, preferences,hashed_password,admin_credentials,backpack_id) values (?,?,?,?,?,?,?,?)`,
      [
        firstname,
        lastname,
        email,
        phone,
        preferences,
        hashed_password,
        admin_credentials,
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
      hashed_Password,
      admin_credentials,
      backpackId,
    } = user;
    return this.database.query(
      `update ${this.table} set title = ?, firstname = ?, lastname =? , email = ?, phone = ?, preferences = ?,hashed_password = ?,admin_credentials = ?, backpack_id = ? where id = ?`,
      [
        firstname,
        lastname,
        email,
        phone,
        preferences,
        hashed_Password,
        admin_credentials,
        backpackId,
        id,
      ]
    );
  }

  // Method to Execute the SQL query to find a user by it's email used in the middleware for the login

  findByEmail(email) {
    return this.database.query(`select * from  ${this.table} where email=?`, [
      email,
    ]);
  }

  // Method to Execute the SQL query to get the credentials of a user used in the middleware for the login

  getCredentials(sub) {
    return this.database.query(
      `select admin_credentials from ${this.table} where id=?`,
      [sub]
    );
  }
}

module.exports = UserManager;
