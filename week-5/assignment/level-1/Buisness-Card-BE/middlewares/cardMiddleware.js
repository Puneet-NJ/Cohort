const { cardSchema } = require("../types");

const cardMiddleware = (req, res, next) => {
	const person = req.body;
	const validateCard = cardSchema.safeParse(person);

	if (!validateCard.success) {
		return res.status(411).json({ msg: "Invalid inputs" });
	}

	next();
};

module.exports = cardMiddleware;
