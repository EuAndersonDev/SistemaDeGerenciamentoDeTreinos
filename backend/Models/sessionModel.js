const { DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

const Session = sequelize.define(
    "Session",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        workoutId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "workout_id",
        },
        exerciseId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "exercise_id",
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "sets",
        },
        repetitions: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "repetitions",
        },
        weight: {
            type: DataTypes.DECIMAL(8, 2),
            allowNull: true,
            field: "weight",
        },
        sessionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "session_date",
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: "notes",
        },
    },
    {
        tableName: "sessions",
        underscored: true,
    }
);

module.exports = Session;