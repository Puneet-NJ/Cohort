import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
	const body = await c.req.json();
	console.log(body);

	console.log(c.req.header("Authorization"));
	console.log(c.req.query("value"));

	return c.json({
		msg: "Thank you for sending data",
	});
});

export default app;
