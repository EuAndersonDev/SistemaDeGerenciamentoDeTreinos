const Workout = require("../Models/workoutModel");

const getAllWorkouts = async (req, res) => {
    try {
        const result = await Workout.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send("Error fetching workouts.");
    }
};

const createWorkout = async (req, res) => {
    const { name, userId } = req.body;
    try {
        const created = await Workout.create({ name, userId });
        res.status(201).json(created);
    } catch (error) {
        console.error("Error creating workout:", error);
        res.status(500).send("Error creating workout.");
    }
};

const getAllWorkoutByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await Workout.findAll({ where: { userId } });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send("Error fetching workouts by user.");
    }
};

const deleteWorkout = async (req, res) => {
    const { workoutId } = req.params;
    try {
        await Workout.destroy({ where: { id: workoutId } });
        res.status(200).send("Workout deleted successfully.");
    } catch (error) {
        res.status(500).send("Error deleting workout.");
    }
};

const updateWorkout = async (req, res) => {
    const { workoutId } = req.params;
    const { name, userId } = req.body;
    try {
        await Workout.update({ name, userId }, { where: { id: workoutId } });
        res.status(200).send("Workout updated successfully.");
    } catch (error) {
        res.status(500).send("Error updating workout.");
    }
};

module.exports = {
    createWorkout,
    getAllWorkoutByUserId,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout,
};
