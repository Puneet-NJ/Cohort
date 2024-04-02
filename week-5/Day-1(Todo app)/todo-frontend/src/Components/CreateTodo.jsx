import { useState } from "react";

export function CreateTodo({ todos, setTodos }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<div>
			<input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
			<br />
			<input
				placeholder="description"
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />

			<button
				onClick={async () => {
					console.log(title + " " + description);
					try {
						await fetch("http://localhost:3000/todo", {
							method: "POST",
							body: JSON.stringify({
								title: title,
								description: description,
							}),
							headers: {
								"content-Type": "application/json",
							},
						});
						const newTodos = [
							...todos,
							{ title, description, completed: false },
						];
						setTodos(newTodos);
					} catch (err) {
						console.log(err);
					}
				}}
			>
				Add todo
			</button>
			<br />
			<br />
		</div>
	);
}
