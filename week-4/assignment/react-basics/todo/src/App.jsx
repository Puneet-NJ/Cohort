import { useState } from "react";
import "./App.css";

function App() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [todos, setTodos] = useState([]);

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleAddTodo = () => {
		const todo = {
			title: title,
			description: description,
		};

		const newTodos = [...todos, todo];
		setTodos(newTodos);
		console.log(todos);

		setTitle("");
		setDescription("");
	};

	return (
		<div>
			<div>
				<input value={title} onChange={handleTitleChange} placeholder="title" />

				<br />
				<br />

				<input
					value={description}
					onChange={handleDescriptionChange}
					placeholder="description"
				/>

				<br />
				<br />

				<button onClick={handleAddTodo}>Add todo</button>
			</div>

			<div>
				{todos.map((todo) => {
					return (
						<>
							<div>{todo.title}</div>
							<div>{todo.description}</div>
							<br />
						</>
					);
				})}
			</div>
		</div>
	);
}

export default App;
