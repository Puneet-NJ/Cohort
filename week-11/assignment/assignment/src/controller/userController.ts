import { Context } from "hono";
import { signupSchema } from "../zod/user";
import { STATUS_CODES } from "..";
import { PrismaClient } from "@prisma/client";
/*
*
 - POST /users/signup - User registration.
Inputs: username, email, password
Actions: Create a new user account. Perform validations and return a 
success message or error messages (e.g., email already in use, 
password requirements not met).
*/
export const signup = async (c: Context) => {
	const prisma = new PrismaClient();

	const body = await c.req.json();

	const validateSchema = signupSchema.safeParse(body);
	// console.log(validateSchema);

	if (!validateSchema.success)
		return c.json({ msg: "Invalid inputs" }, STATUS_CODES.INVALID_INPUTS);

	const userPresent = await prisma.users.findFirst({
		where: {
			email: body.email,
		},
	});
	if (userPresent)
		return c.json({ msg: "Email already exists" }, STATUS_CODES.INVALID_INPUTS);

	console.log(body);

	// const data = await prisma.users.create({
	// 	data: body,
	// });

	return c.json({ msg: "Testing" });
};
