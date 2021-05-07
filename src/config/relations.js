const sequelize = require("./database");
const Mercadoria = require("../model/Mercadoria");

sequelize.sync({force:false})