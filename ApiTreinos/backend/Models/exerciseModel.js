const db = require('../Config/db');


const getAllExercises = async () => {
    const query = `SELECT * FROM exercicios`;
    const result = await db.execute(query);
    return result;
}

const createExercise = async (exercise) => {
    const { nome, grupo_muscular, descricao} = exercise;
    const query = `INSERT INTO exercicios (nome, grupo_muscular, descricao) VALUES (?, ?, ?)`;
    const result = await db.execute(query, [nome, grupo_muscular, descricao]);
    return result;
};

const updateExerciseById = async (exercise) => {
    const { id, nome, grupo_muscular, descricao} = exercise;
    const query = "UPDATE exercicios SET nome = ?, grupo_muscular = ?, descricao = ? WHERE id = ?";
    const result = await db.execute(query, [nome, grupo_muscular, descricao, id]);
    return result;
}

const deleteExerciseById = async (id) => {
    const deleteSessionsQuery = "DELETE FROM sessoes_treino WHERE exercicio_id = ?";
    await db.execute(deleteSessionsQuery, [id]);

    const deleteExerciseQuery = "DELETE FROM exercicios WHERE id = ?";
    const result = await db.execute(deleteExerciseQuery, [id]);
    return result;
}

module.exports = {
    createExercise,
    getAllExercises,
    updateExerciseById,
    deleteExerciseById,
};