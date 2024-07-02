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

const todoSchema = zod.object({
	title: zod.string(),
	description: zod.string(),
	completed: zod.boolean(),
});

module.exports = { singupSchema, signinSchema, todoSchema };
