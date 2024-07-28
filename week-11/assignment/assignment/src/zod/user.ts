import zod from "zod";

export const signupSchema = zod.object({
	username: zod.string().min(3),
	email: zod.string().min(3),
	password: zod.string().min(8).max(20),
});

export const signinSchema = zod.object({
	email: zod.string().min(3),
	password: zod.string().min(8).max(20),
});
