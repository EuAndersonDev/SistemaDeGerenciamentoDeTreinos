const express = require("express");
const router = express.Router();
const exerciseController = require("../Controllers/exerciseController");

router.post("/exercises", exerciseController.createExercise);
router.get("/getAllExercises", exerciseController.getAllExercises);
router.put("/updateExerciseById/:id", exerciseController.updateExerciseById);
router.delete("/deleteExerciseById/:id", exerciseController.deleteExerciseById);

module.exports = router;