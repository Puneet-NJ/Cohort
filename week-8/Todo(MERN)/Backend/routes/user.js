const express = require("express");
const { userSignupSchema } = require("../schema");
const route = express.Router();
const zod = require("zod");

route.post("/signup", (req, res) => {
	const body = req.body;
	const check = userSignupSchema.safeParse(body);
	console.log(check);
});

module.exports = route;
