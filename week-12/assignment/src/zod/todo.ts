import zod from "zod";

export const addTodoSchema = zod.object({
	title: zod.string(),
	description: zod.string(),
});
