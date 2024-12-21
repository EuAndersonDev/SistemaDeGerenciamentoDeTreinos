const express = require("express");
const router = express.Router();
const workoutController = require("../Controllers/workoutController");

router.post("/workout", workoutController.createWorkout);
router.get("/getAllWorkouts", workoutController.getAllWorkouts);
router.get("/workoutByUser/:userId", workoutController.getAllWorkoutByUserId);
router.delete("/workoutById/:workoutId", workoutController.deleteWorkout);
router.put("/workoutUpdate/:workoutId", workoutController.updateWorkout);

module.exports = router;