import zod from "zod";

export const signupSchema = zod.object({
	username: zod.string().min(3),
	email: zod.string().min(3),
	password: zod.string().min(8).max(20),
});
