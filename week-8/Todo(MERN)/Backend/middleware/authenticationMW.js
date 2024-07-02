const jwt = require("jsonwebtoken");
const { JWT_PASSWORD } = require("../config");

const authenticationMW = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];

	req.token = token;

	try {
		const isVerified = jwt.verify(token, JWT_PASSWORD);
		req.id = isVerified.id;
	} catch (err) {
		return res.status(411).json({ msg: "Incorrect token" });
	}

	next();
};

module.exports = authenticationMW;
