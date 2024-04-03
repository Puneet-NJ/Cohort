const { adminSchema } = require("../types");

const adminMiddleware = (req, res, next) => {
	const validateAdmin = adminSchema.safeParse(req.body);

	if (!validateAdmin.success) {
		return res.status(411).json({ msg: "Invalid admin creadentials" });
	}

	next();
};

module.exports = adminMiddleware;
