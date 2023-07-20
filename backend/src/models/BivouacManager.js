const AbstractManager = require("./AbstractManager");

class BivouacManager extends AbstractManager {
  constructor() {
    super({ table: "bivouac" });
  }

  insert(bivouac) {
    const {
      type,
      location,
      OptimalWeatherConditions,
      description,
      url,
      optimalPeriods,
    } = bivouac;
    return this.database.query(
      `insert into ${this.table} (type, location,
        OptimalWeatherConditions,
      description,url,
      optimalPeriods) values (?,?,?,?,?,?)`,
      [
        type,
        location,
        OptimalWeatherConditions,
        description,
        url,
        optimalPeriods,
      ]
    );
  }

  update(bivouac, id) {
    const {
      type,
      location,
      OptimalWeatherConditions,
      description,
      url,
      optimalPeriods,
    } = bivouac;
    return this.database.query(
      `update ${this.table} set type = ?,location = ?,
      OptimalWeatherConditions = ?,
      description = ?,url = ?,
      optimal_periods = ? where id = ?`,
      [
        type,
        location,
        OptimalWeatherConditions,
        description,
        url,
        optimalPeriods,
        id,
      ]
    );
  }
}

module.exports = BivouacManager;
