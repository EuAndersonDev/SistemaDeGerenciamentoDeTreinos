const Exercise = require("../Models/exerciseModel");

const getAllExercises = async (req, res) => {
    try {
        const result = await Exercise.findAll();
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const createExercise = async (req, res) => {
    const { name, muscleGroup, description } = req.body;
    try {
        const created = await Exercise.create({ name, muscleGroup, description });
        return res.status(201).json(created);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const updateExerciseById = async (req, res) => {
    const { id } = req.params;
    const { name, muscleGroup, description } = req.body;
    try {
        await Exercise.update({ name, muscleGroup, description }, { where: { id } });
        const updated = await Exercise.findByPk(id);
        return res.json(updated);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const deleteExerciseById = async (req, res) => {
    const { id } = req.params;
    try {
        await Exercise.destroy({ where: { id } });
        return res.json({ message: "Exercise deleted successfully" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createExercise,
    getAllExercises,
    updateExerciseById,
    deleteExerciseById,
};