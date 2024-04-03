const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

const adminTokenMiddleware = (req, res, next) => {
	const token = req.headers.authorization;

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);
	} catch (err) {
		return res.status(411).json({ msg: "Wrong token" });
	}

	next();
};

module.exports = adminTokenMiddleware;
