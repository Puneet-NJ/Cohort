import { Context } from "hono";
import { getPrisma } from "../prisma/prismaFunction";
import { STATUS_CODES } from "..";
import { blogSchema } from "../zod/blog";
import { verify } from "hono/jwt";

export const getAllBlogs = async (c: Context) => {
	try {
		const prisma = getPrisma(c.env.DATABASE_URL);

		let blogs;
		try {
			blogs = await prisma.blogs.findMany({
				where: {},
			});
		} catch (err) {
			return c.json(
				{ msg: "Error while fetching from DB" },
				STATUS_CODES.INTERNAL_ERROR
			);
		}

		return c.json({
			msg: "Request successfull",

			blogs,
		});
	} catch (err) {
		return c.json({ msg: "Internal Error!!" }, STATUS_CODES.INTERNAL_ERROR);
	}
};

export const createBlog = async (c: Context) => {
	try {
		const prisma = getPrisma(c.env.DATABASE_URL);
		const userId = c.get("userId");

		const body = await c.req.json();

		const validateInput = blogSchema.safeParse(body);
		if (!validateInput.success)
			return c.json({ msg: "Invalid inputs" }, STATUS_CODES.INVALID_INPUTS);

		const blog = await prisma.blogs.create({
			data: {
				title: body.title,
				body: body.body,
				userId,
			},
		});

		return c.json({ msg: "Blog created successfuly", blog });
	} catch (err) {
		return c.json({ msg: "Internal Error!!" }, STATUS_CODES.INTERNAL_ERROR);
	}
};

/**
 * 
 - GET /posts/:id - Retrieve a single blog post by ID.
Actions: Fetch details of a specific blog post. Can be public or have additional 
details/edit capabilities for the owner. 
 */

export const getBlog = async (c: Context) => {
	try {
		const prisma = getPrisma(c.env.DATABASE_URL);

		const token = c.req.header("Authorization")?.split(" ")[1] || "";
		const body = await c.req.json();
		const blogId = parseInt(c.req.param("id"));

		// For the owner of blog
		if (token != "") {
			let verifyToken;
			try {
				verifyToken = await verify(token, c.env.JWT_SECRET);

				const validateInput = blogSchema.safeParse(body);
				if (!validateInput.success)
					return c.json({ msg: "Invalid inputs" }, STATUS_CODES.INVALID_INPUTS);

				try {
					const data = await prisma.blogs.update({
						where: { id: blogId },
						data: {
							title: body.title,
							body: body.body,
						},
					});

					return c.json({ msg: "Updated the blog successfully!!", data });
				} catch (err) {
					return c.json(
						{ msg: "Error while making DB call!!" },
						STATUS_CODES.INTERNAL_ERROR
					);
				}
			} catch (err) {
				return c.json({ msg: "Incorrect token" }, STATUS_CODES.INVALID_INPUTS);
			}
		}

		// For public

		const blog = await prisma.blogs.findFirst({ where: { id: blogId } });

		return c.json({ blog });
	} catch (err) {}
};

export const updateBlog = async (c: Context) => {
	try {
		const prisma = getPrisma(c.env.DATABASE_URL);

		const body = await c.req.json();
		const blogId = parseInt(c.req.param("id"));

		const validateInput = blogSchema.safeParse(body);
		if (!validateInput.success)
			return c.json({ msg: "Invalid Inputs" }, STATUS_CODES.INVALID_INPUTS);

		const data = await prisma.blogs.update({
			where: { id: blogId },
			data: {
				title: body.title,
				body: body.body,
			},
		});

		return c.json({ msg: "Blog updated successfully!!", blog: data });
	} catch (err) {
		return c.json({ msg: "Internal Error!!" }, STATUS_CODES.INTERNAL_ERROR);
	}
};

export const deleteBlog = async (c: Context) => {
	try {
		const prisma = getPrisma(c.env.DATABASE_URL);

		const blogId = parseInt(c.req.param("id"));

		const data = await prisma.blogs.delete({
			where: { id: blogId },
		});

		return c.json({ msg: "Blog deleted!!", data });
	} catch (err) {
		return c.json({ msg: "Internal Error!!" }, STATUS_CODES.INTERNAL_ERROR);
	}
};
