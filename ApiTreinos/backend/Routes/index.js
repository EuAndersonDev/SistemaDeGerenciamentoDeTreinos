const express = require("express");
const router = express.Router();
const authenticateToken = require("../Middleware/authMiddleware");

// Importar as rotas individuais
const userRoutes = require("./userRoutes");
const exerciseRoutes = require("./exerciseRoutes");
const workoutRoutes = require("./workoutRoutes");
const sessionRoutes = require("./sessionRoutes");

// Usar as rotas
router.use("/", userRoutes); 
router.use("/", authenticateToken, exerciseRoutes);
router.use("/", authenticateToken, workoutRoutes);
router.use("/", authenticateToken, sessionRoutes);

module.exports = router;