import { Context, Next } from "hono";
import { verify } from "hono/jwt";
import { STATUS_CODES } from "..";

export const userAuthMiddleware = async (c: Context, next: Next) => {
	try {
		const token = c.req.header("Authorization")?.split(" ")[1] || "";

		let verifyToken;
		try {
			verifyToken = await verify(token, c.env.JWT_SECRET);
		} catch (err) {
			return c.json({ msg: "Invalid token" }, STATUS_CODES.INVALID_INPUTS);
		}

		const userId = verifyToken.id;

		c.set("userId", userId);
		await next();
	} catch (err) {}
};
