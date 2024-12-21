const db = require("../Config/db");
const bcrypt = require("bcrypt");

const createUser = async (user) => {
    const { nome, email, senha } = user;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    const result = await db.query(query, [nome, email, hashedPassword]);
    return result;
};

const findUserByEmail = async (email) => {
    const query = `SELECT * FROM usuarios WHERE email = ?`;
    const [result] = await db.query(query, [email]);
    return result[0];
};

module.exports = {
    createUser,
    findUserByEmail,
};
