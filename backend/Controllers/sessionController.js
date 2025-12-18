const Session = require('../Models/sessionModel');

const getAllSessions = async (req, res) => {
    try {
        const sessions = await Session.findAll();
        return res.status(200).json(sessions);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const sessionsByWorkout = async (req, res) => {
    const { workoutId } = req.params;
    try {
        const sessions = await Session.findAll({ where: { workoutId } });
        return res.status(200).json(sessions);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}


const createSession = async (req, res) => {
    const { workoutId, exerciseId, sets, repetitions, weight, notes } = req.body;
    try {
        const created = await Session.create({ workoutId, exerciseId, sets, repetitions, weight, notes });
        return res.status(201).json({ session: created });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }  
};

module.exports = {  
    createSession,
    getAllSessions,
    sessionsByWorkout,
};