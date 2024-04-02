import { useRef } from "react";
import "./App.css";

function App() {
	const titleRef = useRef();
	const descRef = useRef();

	const state = [
		{
			title: "Go to gym",
			description: "Go to gym @ 8",
			completed: true,
		},
		{
			title: "Do coding",
			description: "Do coding for 4hrs",
			completed: false,
		},
	];

	const addTodo = () => {
		state.push({
			title: titleRef.current.value,
			description: descRef.current.value,
			completed: false,
		});
	};

	return (
		<div>
			<input ref={titleRef} placeholder="title" />
			<br />
			<input ref={descRef} placeholder="description" />
			<br />
			<button onClick={addTodo}>Add todo</button>
			<br />
			<br />
			<br />

			<div>
				{state.map((todo) => {
					return (
						<>
							<div>{todo.title}</div>
							<div>{todo.description}</div>
							<div>{todo.completed ? "completed" : "not completed"}</div>
							<br />
							<br />
						</>
					);
				})}
			</div>
		</div>
	);
}

export default App;
