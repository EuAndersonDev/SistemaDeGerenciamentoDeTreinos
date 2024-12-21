const express = require("express");
const router = express.Router();
const sessionController = require("../Controllers/sessionController");

router.post("/session", sessionController.createSession);
router.get("/getAllSession", sessionController.getAllSessions);
router.get("/sessionByWorkout/:treino_id", sessionController.sessionsByWorkout);

module.exports = router;