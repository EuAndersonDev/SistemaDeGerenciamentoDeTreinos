const { DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

const Workout = sequelize.define(
    "Workout",
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
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "user_id",
        },
    },
    {
        tableName: "workouts",
        underscored: true,
    }
);

module.exports = Workout;