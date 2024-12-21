const db = require("../Config/db");

const getAllWorkouts = async () => {
    const query = `SELECT * FROM treinos`;
    const result =  await db.execute(query);
    return result;
}

const createWorkout = async (workout) => {
    const {nome, usuario_id} = workout;
    const query = `INSERT INTO treinos (nome, usuario_id) VALUES (?, ?)`;
    const result = await db.execute(query, [nome, usuario_id]);
    return result;
};

const getAllWorkoutByUserId = async (userId) => {
    const query = `SELECT * FROM treinos WHERE usuario_id = ?`;
    const result = await db.execute(query, [userId]);
    return result;
};

const updateWorkout = async (workout) => {
    const {nome, usuario_id, id} = workout;
    const query = `UPDATE treinos SET nome = ?, usuario_id = ? WHERE id = ?`;
    const result = await db.execute(query, [nome, usuario_id, id]);
    return result;
};

const deleteWorkout = async (workoutId) => {
    const query = `DELETE FROM treinos WHERE id = ?`;
    const result = await db.execute(query, [workoutId]);
    return result;
};

module.exports = {
    createWorkout,
    getAllWorkouts,
    getAllWorkoutByUserId,
    deleteWorkout,
    updateWorkout,
};