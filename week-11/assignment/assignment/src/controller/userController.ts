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

	console.log(body);

	const data = await prisma.users.create({
		data: body,
	});

	const token = await sign({ username: body.username }, c.env.JWT_SECRET);

	return c.json({ token });
};
