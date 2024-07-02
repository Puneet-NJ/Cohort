const express = require("express");
const { singupSchema, signinSchema, todoSchema } = require("../schema");
const { User, Todos } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_PASSWORD } = require("../config");
const authenticationMW = require("../middleware/authenticationMW");

router.post("/signup", async (req, res) => {
	const body = req.body;
	const isValidInput = singupSchema.safeParse(body);

	if (!isValidInput.success)
		return res.status(411).json({ msg: "Invalid inputs" });

	// CHECK IF ANOTHER ACCOUNT EXISTS WITH SIMILAR USERNAME
	const userFound = await User.findOne({ username: body.username });
	if (userFound)
		return res.status(411).json({ msg: "Username already exists" });

	const createdUser = await User.create(body);
	const createdTodos = await Todos.create({
		userId: createdUser._id,
		todos: [],
	});
	const token = jwt.sign({ id: createdUser._id }, JWT_PASSWORD);

	res.json({ token });
});

router.post("/login", authenticationMW, async (req, res) => {
	const body = req.body;
	const isValidInput = signinSchema.safeParse(body);

	if (!isValidInput.success)
		return res.status(411).json({ msg: "Invalid inputs" });

	// CHECK IF USER EXISTS
	const userFound = await User.findOne({
		username: body.username,
		password: body.password,
	});
	if (!userFound) return res.status(404).json({ msg: "User doesn't exist" });

	res.json({ msg: "Login successfull" });
});

router.post("/addTodo", authenticationMW, async (req, res) => {
	const todo = req.body;

	// INPUT VALIDATION
	const isValidInput = todoSchema.safeParse(todo);
	if (!isValidInput.success)
		return res.status(411).json({ msg: "Invalid inputs" });

	// FIND THE TODOS LIST FOR CORRESPONDING USERID
	const pushTodo = await Todos.updateOne(
		{ userId: req.id },
		{ $push: { todos: todo } }
	);

	if (pushTodo.modifiedCount === 0)
		return res.status(411).json({ msg: "Error while adding todo" });

	res.json({ msg: "Todo added!!" });
});

module.exports = router;
