const zod = require("zod");

const userSignupSchema = zod.object({
	name: zod.string().min(3),
	username: zod.string().min(3),
	password: zod.string().min(7),
});

module.exports = { userSignupSchema };
