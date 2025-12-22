const express = require("express");
const router = express.Router();
const exerciseController = require("../Controllers/exerciseController");

router.post("/createExercises", exerciseController.createExercise);
router.get("/getAllExercises", exerciseController.getAllExercises);
router.get("/getExerciseById/:id", exerciseController.getExerciseById);
router.put("/updateExerciseById/:id", exerciseController.updateExerciseById);
router.delete("/deleteExerciseById/:id", exerciseController.deleteExerciseById);

module.exports = router;