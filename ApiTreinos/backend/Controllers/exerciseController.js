const exerciseModel = require('../Models/exerciseModel');


const getAllExercises = async (req, res) => {
    try {
        const result = await exerciseModel.getAllExercises();
        return res.json(result[0]);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const createExercise = async (req, res) => {
    const {nome, grupo_muscular, descricao} = req.body;
    const exercise = {nome, grupo_muscular, descricao};
    try {
        const result = await exerciseModel.createExercise(exercise);
        return res.json(exercise);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    };
};

const updateExerciseById = async (req, res) => {
    const {id} = req.params;
    const {nome, grupo_muscular, descricao} = req.body;
    const exercise = {id, nome, grupo_muscular, descricao};
    try{
        const result = await exerciseModel.updateExerciseById(exercise);
        return res.json(exercise);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    };
};

const deleteExerciseById = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await exerciseModel.deleteExerciseById(id);
        return res.json({ message: "Exercício deletado com sucesso!" });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    };
};

module.exports = {
    createExercise,
    getAllExercises,
    updateExerciseById,
    deleteExerciseById,
};