const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.municipalities = require("./municipality.js")(sequelize, Sequelize);
db.contacts = require("./contact.js")(sequelize, Sequelize);

db.municipalities.hasMany(db.contacts, { as: "contacts" });
db.contacts.belongsTo(db.municipalities, {
  foreignKey: "municipalityId",
  as: "municipality",
});

module.exports = db;