const express = require("express");
const app = express();
const zod = require("zod");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
	const title = req.body.title;
	const description = req.body.description;

	const inputValidate = createTodoSchema.safeParse({ title, description });

	if (!inputValidate.success) {
		return res.status(411).json({ msg: inputValidate.error });
	}

	await todo.create({
		title,
		description,
		completed: false,
	});

	res.json({
		msg: "Todo created",
	});
});

app.get("/todos", async (req, res) => {
	const todos = await todo.find({});

	res.json({
		todos,
	});
});

app.post("/completed", async (req, res) => {
	const id = req.body.id;

	const inputValidate = updateTodoSchema.safeParse({ id });

	if (!inputValidate.success) {
		return res.status(411).json({ msg: "Todo doesn't exist" });
	}

	await todo.updateOne({ _id: id }, { completed: true });

	res.json({ msg: "Todo marked completed" });
});

app.listen(3000);
