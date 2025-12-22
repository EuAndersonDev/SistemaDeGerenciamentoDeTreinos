const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");

// Importar as rotas individuais
const userRoutes = require("./userRoutes");
const exerciseRoutes = require("./exerciseRoutes");
const workoutRoutes = require("./workoutRoutes");
const sessionRoutes = require("./sessionRoutes");

// Usar as rotas
router.use("/userRoutes", userRoutes); 
router.use("/exerciseRoutes", authMiddleware, exerciseRoutes);
router.use("/workoutRoutes", authMiddleware, workoutRoutes);
router.use("/sessionRoutes", authMiddleware, sessionRoutes);

module.exports = router;