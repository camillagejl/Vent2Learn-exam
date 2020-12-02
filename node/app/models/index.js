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
db.rooms = require("./rooms.model.js")(sequelize, Sequelize);
db.vents = require("./vents.model.js")(sequelize, Sequelize);
db.ventHistory = require("./ventHistory.model.js")(sequelize, Sequelize);

module.exports = db;
