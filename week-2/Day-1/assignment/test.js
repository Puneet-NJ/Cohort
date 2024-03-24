const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const todos = [
	{
		id: Math.floor(Math.random() * 10000),
		title: "Go to gym",
		description: "You need to go to gym at 8 and train chest today",
	},
];

const searchTodo = (idOfTodo) => {
	const transformFuntion = (item) => {
		if (item.id === idOfTodo) return true;
	};

	const todo = todos.filter(transformFuntion);
	return todo;
};

const searchTodoIndex = (id) => {
	let index = -1;

	const transformFuntion = (item, i) => {
		if (item.id === id) index = i;
	};

	todos.map(transformFuntion);

	return index;
};

app.get("/todos", (req, res) => {
	res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
	let id = req.params.id;
	id = Number(id);
	const todo = searchTodo(id);

	if (todo.length === 0)
		return res.status(404).json({
			msg: "Not found!!",
		});
	res.status(200).json(todo);
});

app.post("/todos", (req, res) => {
	let title = req.body.title;
	const description = req.body.description;
	const completed = req.body.completed;

	// Create a todo
	const todo = {
		id: Math.floor(Math.random() * 10000),
		title: title,
		description: description,
		completed: completed,
	};
	todos.push(todo);

	res.status(201).json({
		id: todo.id,
	});
});

app.put("/todos/:id", (req, res) => {
	let id = req.params.id;
	const title = req.body.title;
	const completed = req.body.completed;

	id = Number(id);
	const todoIndex = searchTodoIndex(id);

	if (todoIndex === -1)
		return res.status(404).json({
			msg: "Not found!!",
		});

	todos[todoIndex].title = title;
	todos[todoIndex].completed = completed;

	return res.status(200);
});

app.delete("/todos/:id", (req, res) => {
	let id = req.params.id;
	id = Number(id);

	console.log(id);
	const todoIndex = searchTodoIndex(id);
	if (todoIndex === -1) return res.status(404);
	todos.splice(todoIndex, 1);
	console.log(todos);

	res.sendStatus(200);
});

app.listen(3000);

module.exports = app;
