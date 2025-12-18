const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const created = await User.create({ name, email, password: hashedPassword });
        return res.status(201).json({ id: created.id, name: created.name, email: created.email });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "your_jwt_secret", {
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
