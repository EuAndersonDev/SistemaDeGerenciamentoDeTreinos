const { DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

const Exercise = sequelize.define(
    "Exercise",
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
        muscleGroup: {
            type: DataTypes.STRING(120),
            allowNull: false,
            field: "muscle_group",
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: "description",
        },
    },
    {
        tableName: "exercises",
        underscored: true,
    }
);

module.exports = Exercise;