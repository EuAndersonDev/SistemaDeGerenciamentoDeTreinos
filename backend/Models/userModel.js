const { DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: "name",
        },
        email: {
            type: DataTypes.STRING(180),
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "password",
        },
    },
    {
        tableName: "users",
        underscored: true,
    }
);

module.exports = User;