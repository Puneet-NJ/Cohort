import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();
console.log("hello1");

app.get("/", (req, res) => {
	res.json({
		message: "Healthy server",
	});
});

app.post("/", async (req, res) => {
	try {
		await client.user.create({
			data: {
				username: req.body.email,
				name: req.body.name,
			},
		});

		res.json({
			message: "Done signing up!",
		});
	} catch (err) {
		console.log(err);
	}
});

app.listen(3000);
