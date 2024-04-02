import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo";
import { Todos } from "./Components/Todos";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setInterval(fetchData, 5000);
	}, []);

	const fetchData = async () => {
		const response = await fetch("http://localhost:3000/todos");
		const json = await response.json();
		setTodos(json.todos);
	};

	return (
		<div>
			<CreateTodo todos={todos} setTodos={setTodos} />
			<Todos todos={todos} />
		</div>
	);
}

export default App;
