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
      optimalPeriods,
    } = bivouac;
    return this.database.query(
      `insert into ${this.table} (type, location,
        OptimalWeatherConditions,
      description,
      optimalPeriods) values (?,?,?,?,?)`,
      [type, location, OptimalWeatherConditions, description, optimalPeriods]
    );
  }

  update(bivouac, id) {
    const {
      type,
      location,
      OptimalWeatherConditions,
      description,
      optimalPeriods,
    } = bivouac;
    return this.database.query(
      `update ${this.table} set type = ?,location = ?,
      Optimal_weather_conditions = ?,
      description = ?,
      optimal_periods = ? where id = ?`,
      [
        type,
        location,
        OptimalWeatherConditions,
        description,
        optimalPeriods,
        id,
      ]
    );
  }
}

module.exports = BivouacManager;
