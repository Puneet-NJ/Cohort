const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
	// Implement user auth logic
	// You need to check the headers and validate the user from the user DB.
	// Check readme for the exact headers to be expected

	const token = req.headers.authorization;
	const actualToken = token.split(" ")[1];

	try {
		const decode = jwt.verify(actualToken, JWT_SECRET);
		req.username = decode.username;
	} catch (err) {
		return res.status().json({
			msg: "You are not authenticated",
		});
	}

	next();
}

module.exports = userMiddleware;
