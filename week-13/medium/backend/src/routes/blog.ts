import { Hono } from "hono";
import { RESPONSE_MESSAGES, STATUS_CODES } from ".";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlog, updateBlog } from "@puneet_nj/medium-common";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_PASSWORD: string;
	};
	Variables: {
		userId: any;
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

		c.set("userId", payload.id);

		await next();
	} catch (err) {
		return c.json(
			{ msg: RESPONSE_MESSAGES.INTERNAL_ERROR },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});

blogRouter.post("/", async (c) => {
	const body = await c.req.json();
	const validateInput = createBlog.safeParse(body);

	if (!validateInput.success)
		return c.json(
			{ msg: RESPONSE_MESSAGES.INVALID_INPUTS },
			STATUS_CODES.INVALID_INPUTS
		);

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const response = await prisma.post.create({
			data: {
				title: body.title,
				content: body.content,
				authorId: c.get("userId"),
			},
		});

		return c.json({ msg: "Insert successful", data: response });
	} catch (err) {
		return c.json(
			{ msg: "Error while inserting data" },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});

blogRouter.put("/", async (c) => {
	const body = await c.req.json();
	const validateInput = updateBlog.safeParse(body);

	if (!validateInput.success)
		return c.json(
			{ msg: RESPONSE_MESSAGES.INVALID_INPUTS },
			STATUS_CODES.INVALID_INPUTS
		);

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const response = await prisma.post.update({
			where: {
				id: body.id,
			},
			data: {
				title: body.title,
				content: body.content,
			},
		});

		return c.json({ msg: "Update successfull", data: response });
	} catch (err) {
		return c.json(
			{ msg: "Error while updating data" },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});

blogRouter.get("/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const response = await prisma.post.findMany({
			select: {
				id: true,
				title: true,
				content: true,
				publishedAt: true,
				author: {
					select: {
						name: true,
					},
				},
			},
		});

		return c.json({ msg: "Fetch successfull", data: response });
	} catch (err) {
		return c.json(
			{ msg: "Error while fetching data" },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});

blogRouter.get("/:id", async (c) => {
	const id = c.req.param("id");

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const response = await prisma.post.findFirst({
			where: {
				id,
			},
			select: {
				id: true,
				title: true,
				content: true,
				publishedAt: true,

				author: {
					select: {
						name: true,
					},
				},
			},
		});

		return c.json({ msg: "Fetch successfull", data: response });
	} catch (err) {
		return c.json(
			{ msg: "Error while fetching data" },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});
