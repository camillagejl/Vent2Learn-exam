const Sequelize = require("sequelize");
const sequelize = new Sequelize('vent2learndb', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3307
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);

module.exports = db;
