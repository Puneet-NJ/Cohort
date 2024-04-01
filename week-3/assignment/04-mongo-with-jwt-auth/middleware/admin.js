const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
	// Implement admin auth logic
	// You need to check the headers and validate the admin from the admin DB.
	// Check readme for the exact headers to be expected

	const token = req.headers.authorization;
	const actualToken = token.split(" ")[1];

	try {
		jwt.verify(actualToken, JWT_SECRET);
	} catch (err) {
		return res.status().json({
			msg: "You are not authenticated",
		});
	}

	next();
}

module.exports = adminMiddleware;
