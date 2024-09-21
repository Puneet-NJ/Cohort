// import { revalidate } from "@/actions/todoValidate";

import revalidate from "./actions/todoValidate";

export default async function Home() {
	const response = await fetch("http://localhost:5001", {
		next: { tags: ["todos"] },
	});

	const { todo } = await response.json();
	await revalidate();
	console.log(todo);

	return todo ? (
		<div>
			{todo.title}
			<br />
			{todo.description}
		</div>
	) : (
		<>hi</>
	);
}
