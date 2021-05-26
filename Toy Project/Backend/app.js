global.config = require("./config.json");
const express = require("express");
const cors = require("cors");
const toysController = require("./controllers-layer/toys-controller");
const server = express();


server.use(express.json());
server.use(cors());
server.use("/api", toysController);
server.listen(3001, () => console.log("Listening..."));