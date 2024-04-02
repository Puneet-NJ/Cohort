export function Todos({ todos }) {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<div key={todo._id}>
						<h1>{todo.title}</h1>
						<h1>{todo.description}</h1>
						<button
							onClick={async () => {
								await fetch("http://localhost:3000/completed", {
									method: "POST",
									body: JSON.stringify({
										id: todo._id,
									}),
									headers: {
										"content-Type": "application/json",
									},
								});
							}}
						>
							{todo.completed ? "Completed" : "Mark as complete"}
						</button>
					</div>
				);
			})}
		</div>
	);
}
