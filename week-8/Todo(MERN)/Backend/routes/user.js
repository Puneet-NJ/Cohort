const express = require("express");
const route = express.Router();

route.get("/hi", (req, res) => {
	console.log("Hi from user.js");
});

module.exports = { route };
