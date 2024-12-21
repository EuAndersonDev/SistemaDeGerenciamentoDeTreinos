const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Routes/index");

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(express.static(path.join(__dirname, "../frontend/build")));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

module.exports = app;