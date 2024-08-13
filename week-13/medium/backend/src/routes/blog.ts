import { Hono } from "hono";
import { RESPONSE_MESSAGES, STATUS_CODES } from ".";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
	Bindings: {
		JWT_PASSWORD: string;
	};
}>();

blogRouter.use("/*", async (c, next) => {
	try {
		const header = c.req.header("Authorization");
		if (!header)
			return c.json({ msg: "No token found" }, STATUS_CODES.INVALID_INPUTS);

		const token = header.split(" ")[1];

		const payload = await verify(token, c.env.JWT_PASSWORD);
		if (!payload)
			return c.json({ msg: "Unauthorized" }, STATUS_CODES.INVALID_INPUTS);

		c.set("userId" as any, payload.id);

		await next();
	} catch (err) {
		return c.json(
			{ msg: RESPONSE_MESSAGES.INTERNAL_ERROR },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});

blogRouter.post("/", async (c) => {
	return c.text("blog route");
});

blogRouter.put("/", async (c) => {
	return c.text("blog route");
});

blogRouter.get("/:id", async (c) => {
	return c.text("blog route");
});

blogRouter.get("/bulk", async (c) => {
	return c.text("blog route");
});
