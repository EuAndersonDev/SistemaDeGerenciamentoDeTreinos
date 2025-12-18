const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE || "treino_db",
    process.env.DB_USER || "root",
    process.env.DB_PASS || "root",
    {
        host: process.env.DB_HOST || process.env.MYSQL_HOST || "localhost",
        port: process.env.DB_PORT || process.env.MYSQL_PORT || 3306,
        dialect: "mysql",
        logging: false,
    }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established with Sequelize");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

testConnection();

module.exports = sequelize;