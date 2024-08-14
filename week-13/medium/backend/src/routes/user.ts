import { Hono } from "hono";
import { RESPONSE_MESSAGES, STATUS_CODES } from "./index";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { userSignup, userSignin } from "@puneet_nj/medium-common";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_PASSWORD: string;
	};
}>();

userRouter.post("/signup", async (c) => {
	try {
		const body = await c.req.json();
		const validateInput = userSignup.safeParse(body);

		if (!validateInput.success)
			return c.json(
				{ msg: RESPONSE_MESSAGES.INVALID_INPUTS },
				STATUS_CODES.INVALID_INPUTS
			);

		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());

		const response = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
				name: body.name,
			},
		});

		const token = await sign({ id: response.id }, c.env.JWT_PASSWORD);

		return c.json({ msg: "User created successfully", token, response });
	} catch (err) {
		return c.json(
			{ msg: RESPONSE_MESSAGES.INTERNAL_ERROR },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});

userRouter.post("/signin", async (c) => {
	try {
		const body = await c.req.json();
		const validateInput = userSignin.safeParse(body);

		if (!validateInput.success)
			return c.json(
				{ msg: RESPONSE_MESSAGES.INVALID_INPUTS },
				STATUS_CODES.INVALID_INPUTS
			);

		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());

		const response = await prisma.user.findFirst({
			where: {
				email: body.email,
				password: body.password,
			},
		});

		if (!response)
			return c.json(
				{ msg: RESPONSE_MESSAGES.INVALID_INPUTS },
				STATUS_CODES.INVALID_INPUTS
			);

		const token = await sign({ id: response.id }, c.env.JWT_PASSWORD);

		return c.json({ msg: "Signed in successfully", token });
	} catch (err) {
		return c.json(
			{ msg: RESPONSE_MESSAGES.INTERNAL_ERROR },
			STATUS_CODES.INTERNAL_ERROR
		);
	}
});
