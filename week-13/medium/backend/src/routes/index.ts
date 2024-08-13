import { Hono } from "hono";
import { userRouter } from "./user";
import { blogRouter } from "./blog";

export const route = new Hono();

export enum STATUS_CODES {
	INTERNAL_ERROR = 500,
	NOT_FOUND = 404,
	INVALID_INPUTS = 403,
}

export enum RESPONSE_MESSAGES {
	INTERNAL_ERROR = "Internal Server Error",
	NOT_FOUND = "404 Not Found",
	INVALID_INPUTS = "Invalid inputs",
}

route.route("/user", userRouter);
route.route("/blog", blogRouter);
