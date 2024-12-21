const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    const user = { nome, email, senha };
    try {
        const result = await userModel.createUser(user);
        return res.json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await userModel.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado" });
        }
        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Senha inválida" });
        }
        const token = jwt.sign({ id: user.id }, "seu_segredo_jwt", {
            expiresIn: "1h",
        });
        return res.json({ token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    loginUser,
};
