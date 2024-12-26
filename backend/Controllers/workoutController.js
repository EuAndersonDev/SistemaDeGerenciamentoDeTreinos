const workoutModel = require("../Models/workoutModel");

const getAllWorkouts = async (req, res) => {
    try {
        const result = await workoutModel.getAllWorkouts();
        res.status(200).send(result[0]);
    } catch (error) {
        res.status(500).send("Erro ao buscar treinos.");
    }
};

const createWorkout = async (req, res) => {
    const { nome, usuario_id } = req.body;
    const workout = { nome, usuario_id };
    try {
        const result = await workoutModel.createWorkout(workout);
        res.json(workout);
    } catch (error) {
        console.error("Erro ao criar treino:", error);
        res.status(500).send("Erro ao criar treino.");
    }
};

const getAllWorkoutByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await workoutModel.getAllWorkoutByUserId(userId);
        res.status(200).send(result[0]);
    } catch (error) {
        res.status(500).send("Erro ao buscar treinos por usuário.");
    }
};

const deleteWorkout = async (req, res) => {
    const { workoutId } = req.params;
    try {
        const result = await workoutModel.deleteWorkout(workoutId);
        res.status(200).send("Treino deletado com sucesso.");
    } catch (error) {
        res.status(500).send("Erro ao deletar treino.");
    }
};

const updateWorkout = async (req, res) => {
    const { workoutId } = req.params;
    const { nome, usuario_id } = req.body;
    const workout = { workoutId, nome, usuario_id };
    try {
        const result = await workoutModel.updateWorkout(workout);
        res.status(200).send("Treino atualizado com sucesso.");
    } catch (error) {
        res.status(500).send("Erro ao atualizar treino.");
    }
};

module.exports = {
    createWorkout,
    getAllWorkoutByUserId,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout,
};
