import { atom, selector } from "recoil";

export const todosAtom = atom({
	key: "todosAtom",
	default: [
		{ title: "Go to gym", description: "Go to gym at 8PM" },
		{ title: "Go to market", description: "Go to market at 6PM" },
		{ title: "Go to gym", description: "Go to gym to do cardio" },
		{ title: "Code", description: "Code for atleast 4hrs" },
	],
});

export const filterTodoAtom = atom({
	key: "filterTodoAtom",
	default: "",
});

export const filteredTodosSelector = selector({
	key: "filteredTodos",
	get: ({ get }) => {
		const todos = get(todosAtom);
		const filterTodo = get(filterTodoAtom);

		const filtered = todos.filter((todo) => {
			// console.log(todo.title.c);
			if (
				todo.title.includes(filterTodo) ||
				todo.description.includes(filterTodo)
			)
				return true;
		});

		return filtered;
	},
});
