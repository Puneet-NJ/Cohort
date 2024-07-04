import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import axios from "axios";
import Todo from "../components/Todo";
import Button from "../components/Button";

const Todos = () => {
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [render, setRender] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");

		axios({
			method: "GET",
			url: "http://localhost:3000/api/v1/getTodos",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((response) => {
			setTodos(response.data.todos);
			console.log(todos);
		});
	}, [render]);

	return (
		<div className="bg-gray-500 min-h-screen text-center pt-20">
			<Heading label={"To-Do list"} />

			<div className="mt-4 w-4/6 mx-auto">
				<InputBox
					placeholder={"Enter your To-do task Title"}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<InputBox
					placeholder={"Enter Description"}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button
					onClickParent={async () => {
						const response = await axios({
							method: "POST",
							url: "http://localhost:3000/api/v1/addTodo",
							data: {
								title,
								description,
								completed: false,
							},
							headers: {
								Authorization: `Bearer ${localStorage.getItem("token")}`,
							},
						});

						setTitle("");
						setDescription("");
						setRender((prev) => !prev);
					}}
					label={"Add Todo"}
				/>
			</div>

			<div className="w-4/6 mx-auto py-20 text-left">
				{todos.map((todo) => (
					<Todo
						key={todo._id}
						title={todo.title}
						description={todo.description}
						completed={todo.completed}
						id={todo._id}
					/>
				))}
			</div>
		</div>
	);
};

export default Todos;
