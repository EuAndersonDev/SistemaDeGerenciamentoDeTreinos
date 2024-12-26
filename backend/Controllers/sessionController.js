const sessionModel = require('../Models/sessionModel');

const getAllSessions = async (req, res) => {
    try {
        const sessions = await sessionModel.getAllSessions();
        return res.status(200).json(sessions[0]);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const sessionsByWorkout = async (req, res) => {
    const { treino_id } = req.params;
    try {
        const sessions = await sessionModel.sessionsByWorkout(treino_id);
        return res.status(200).json(sessions[0]);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}


const createSession = async (req, res) => {
    const { treino_id, exercicio_id, series, repeticoes, peso, observacoes } = req.body;
    const session = { treino_id, exercicio_id, series, repeticoes, peso, observacoes };
    try {
        const result = await sessionModel.createSession(session);
        return res.status(201).json({ session});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }  
};

module.exports = {  
    createSession,
    getAllSessions,
    sessionsByWorkout,
};