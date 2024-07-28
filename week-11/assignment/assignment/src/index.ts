import { Hono } from "hono";
import { userRoute } from "./routes/userRouter";
import { cors } from "hono/cors";

const app = new Hono();
app.use(cors());

export enum STATUS_CODES {
	INVALID_INPUTS = 403,
	NOT_FOUND = 404,
	INTERNAL_ERROR = 500,
}

app.route("/api/v1/users/", userRoute);
// app.get("/", (c) => {
// 	return c.text("Hello Hono!");
// });

export default app;
