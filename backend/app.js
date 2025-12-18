const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Routes/index");
const sequelize = require("./Config/sequelize");

// Test the database connection
sequelize.sync({alter: true})
    .then(() => console.log('Database synchronized'))
    .catch(err => console.log('Error: ' + err));

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;