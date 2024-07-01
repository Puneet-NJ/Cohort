const zod = require("zod");

const singupSchema = zod.object({
	name: zod.string().min(3),
	username: zod.string().min(3),
	password: zod.string().min(3),
});

const signinSchema = zod.object({
	username: zod.string().min(3),
	password: zod.string().min(3),
});

module.exports = { singupSchema, signinSchema };
