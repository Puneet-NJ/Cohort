import { Context } from "hono";
import { signinSchema, signupSchema } from "../zod/user";
import { STATUS_CODES } from "..";
import { getPrisma } from "../prisma/prismaFunction";
import { sign } from "hono/jwt";

export const signup = async (c: Context) => {
	try {
		const prisma = getPrisma(c.env.DATABASE_URL);

		const body = await c.req.json();

		const validateSchema = signupSchema.safeParse(body);
		if (!validateSchema.success)
			return c.json({ msg: "Invalid inputs" }, STATUS_CODES.INVALID_INPUTS);

		const userPresent = await prisma.users.findFirst({
			where: { OR: [{ username: body.username }, { email: body.email }] },
		});
		if (userPresent)
			return c.json(
				{ msg: "Email / Username already exists" },
				STATUS_CODES.INVALID_INPUTS
			);

		let data;
		try {
			data = await prisma.users.create({
				data: body,
			});
		} catch (err) {
			return c.json(
				{ msg: "Failed to insert data into Database" },
				STATUS_CODES.INTERNAL_ERROR
			);
		}

		const token = await sign({ id: data.id }, c.env.JWT_SECRET);

		return c.json({
			msg: "User created successfully",
			token: token,
			user: {
				userId: data.id,
				username: data.username,
				email: data.email,
			},
		});
	} catch (err) {
		return c.json({ msg: "Internal Error" }, STATUS_CODES.INTERNAL_ERROR);
	}
};

export const signin = async (c: Context) => {
	try {
		const prisma = getPrisma(c.env.DATABASE_URL);

		const body = await c.req.json();

		const validateSchema = signinSchema.safeParse(body);
		if (!validateSchema.success)
			return c.json({ msg: "Invalid inputs" }, STATUS_CODES.INVALID_INPUTS);

		let userPresent;
		try {
			userPresent = await prisma.users.findFirst({
				where: { username: body.username, password: body.password },
			});

			if (!userPresent)
				return c.json(
					{ msg: "Username and Password doesn't match or not found" },
					STATUS_CODES.INVALID_INPUTS
				);
		} catch (err) {
			return c.json(
				{ msg: "Failed to find data from the Database" },
				STATUS_CODES.INTERNAL_ERROR
			);
		}

		const token = await sign({ id: userPresent.id }, c.env.JWT_SECRET);

		return c.json({
			message: "login successfully",
			token: token,
			user: {
				userId: userPresent.id,
				username: userPresent.username,
				email: userPresent.email,
			},
		});
	} catch (err) {
		return c.json({ msg: "Internal Error" }, STATUS_CODES.INTERNAL_ERROR);
	}
};

/**
 *
 * */
