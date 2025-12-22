const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || 'your_secret_key';
const tokenExpiry = process.env.TOKEN_EXPIRY || '1h';

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        if(!name || !email || !password){
            return res.status(400).json({ error: "require data, name, email and password" });
        }
        const created = await User.create({ name, email, password: hashedPassword });
        return res.status(201).json({ id: created.id, name: created.name, email: created.email });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        
        const user = await User.findOne({ where: { email } });
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: tokenExpiry });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Database error' });
    }
};

module.exports = {
    createUser,
    loginUser,
};
