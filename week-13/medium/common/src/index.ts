import zod from "zod";

export const userSignup = zod.object({
	email: zod.string().email(),
	name: zod.string().optional(),
	password: zod.string(),
});

export const userSignin = zod.object({
	email: zod.string().email(),
	password: zod.string(),
});

export const createBlog = zod.object({
	title: zod.string(),
	content: zod.string(),
});

export const updateBlog = zod.object({
	title: zod.string(),
	content: zod.string(),
	id: zod.string(),
});

export type UserSignup = zod.infer<typeof userSignup>;
export type UserSignin = zod.infer<typeof userSignin>;
export type CreateBlog = zod.infer<typeof createBlog>;
export type UpdateBlog = zod.infer<typeof updateBlog>;
