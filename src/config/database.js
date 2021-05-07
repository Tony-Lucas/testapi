const Sequelize = require("sequelize");
const sequelize = new Sequelize("", "", "", {
    host: "",
    dialect: "mysql",
    raw: true,
    define: {
        timestamps: false
    }
})

module.exports = sequelize;