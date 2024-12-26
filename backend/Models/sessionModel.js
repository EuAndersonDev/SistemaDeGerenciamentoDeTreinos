const db = require("../Config/db");

const getAllSessions = async () => {
    const query = `SELECT * FROM sessoes_treino`;
    const result = await db.execute(query);
    return result;
};

const sessionsByWorkout = async (workout_id) => {
    const query = `SELECT * FROM sessoes_treino WHERE treino_id = ?`;
    const result = await db.execute(query, [workout_id]);
    return result;
};

const createSession = async (session) => {
    const dataUTC = new Date().toISOString().slice(0, 19).replace("T", " ");
    const { treino_id, exercicio_id, series, repeticoes, peso, observacoes } = session;
    const data = dataUTC;
    const query = "INSERT INTO sessoes_treino (treino_id, exercicio_id, series, repeticoes, peso, data, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.execute(query, [treino_id, exercicio_id, series, repeticoes, peso, data, observacoes,]);
    return result;
};

module.exports = {
    createSession,
    getAllSessions,
    sessionsByWorkout,
};
