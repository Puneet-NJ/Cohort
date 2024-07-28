import { Context } from "hono";
import { signupSchema } from "../zod/user";
import { STATUS_CODES } from "..";
import { getPrisma } from "../prisma/prismaFunction";
import { sign } from "hono/jwt";
/*
*
 - POST /users/signup - User registration.
Inputs: username, email, password
Actions: Create a new user account. Perform validations and return a 
success message or error messages (e.g., email already in use, 
password requirements not met).
*/

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
