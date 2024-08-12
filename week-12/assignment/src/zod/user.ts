import zod from "zod";

export const userSignupSchema = zod.object({
	name: zod.string().min(3),
	username: zod.string().min(3),
	password: zod.string().min(3),
});
