import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { filterTodoAtom, filteredTodosSelector } from "./store/atoms/todos";

function App() {
	return (
		<RecoilRoot>
			<Todos />
		</RecoilRoot>
	);
}

function Todos() {
	const setfilterTodo = useSetRecoilState(filterTodoAtom);

	return (
		<div>
			<input
				onChange={(e) => {
					setfilterTodo(e.target.value);
				}}
				placeholder="filter"
			/>
			<DisplayTodos />
		</div>
	);
}

function DisplayTodos() {
	const filteredTodos = useRecoilValue(filteredTodosSelector);

	return (
		<div>
			{filteredTodos.map((todo) => {
				return (
					<>
						<div>{todo.title}</div>
						<div>{todo.description}</div>
						<br />
					</>
				);
			})}
		</div>
	);
}

export default App;
