import { atom, selector } from "recoil";

export const countAtom = atom({
	key: "countAtom",
	default: 0,
});

export const evenSelector = selector({
	key: "evenSelector",
	get: ({ get }) => {
		const count = get(countAtom);
		return count % 2 === 0;
	},
});

const todosAtom = atom({
	key: "todosAtom",
	default: [
		{ title: "Go to gym", description: "Go to gym at 8PM" },
		{ title: "Go to market", description: "Go to market at 6PM" },
		{ title: "Go to gym", description: "Go to gym to do cardio" },
		{ title: "Code", description: "Code for atleast 4hrs" },
	],
});

const filterTodoAtom = atom({
	key: "filterTodoAtom",
	default: "",
});

export const filteredTodos = selector({
	key: "filteredTodos",
	get: ({ get }) => {
		const todos = get(todosAtom);
		const filterTodo = get(filterTodoAtom);

		const filtered = todos.filter((todo) => {
			if (
				todo.title.contains(filterTodo) ||
				todo.description.contains(filterTodo)
			)
				return true;
		});

		return filtered;
	},
});
