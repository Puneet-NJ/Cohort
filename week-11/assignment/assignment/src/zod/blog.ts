import zod from "zod";

export const blogSchema = zod.object({
	title: zod.string().min(3),
	body: zod.string().min(5),
});
