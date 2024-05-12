import { useEffect, useState } from "react";
import axios from "axios";

// function useTodos(n) {
// 	const [todos, setTodos] = useState([]);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		const intervalId = setInterval(() => {
// 			axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
// 				setTodos(res.data.todos);
// 				setLoading(false);
// 			});
// 		}, n * 1000);

// 		axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
// 			setTodos(res.data.todos);
// 			setLoading(false);
// 		});

// 		return () => {
// 			clearInterval(intervalId);
// 		};
// 	}, [n]);

// 	return { todos, loading };
// }

function useIsOnine() {
	const [isOnline, setIsOnline] = useState(window.navigator.onLine);

	useEffect(() => {
		console.log("hi");
		window.addEventListener("online", () => {
			console.log("hi");
			setIsOnline(true);
		});

		window.addEventListener("offline", () => {
			setIsOnline(false);
		});
	}, []);

	return isOnline;
}

const useInterval = (callback, time) => {
	useEffect(() => {
		const intervalId = setInterval(callback, time);

		return () => {
			clearInterval(intervalId);
		};
	}, [callback, time]);
};

function App() {
	const [inputValue, setInputValue] = useState("");
	const debouncedValue = useDebounce2(inputValue, 1000); // 500 milliseconds debounce delay

	// Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

	console.log(debouncedValue);
	return (
		<>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Search..."
			/>
			<div>{debouncedValue}</div>
		</>
	);
}

function useDebounce2(value, time) {
	const [debounce, setDebounce] = useState("");

	useEffect(() => {
		let timeoutId = setTimeout(() => {
			setDebounce(value);
		}, time);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [value, time]);

	return debounce;
}

let timeoutId;
function useDebounce(value, time) {
	clearTimeout(timeoutId);
	const [debounce, setDebounce] = useState("");

	useEffect(() => {
		timeoutId = setTimeout(() => {
			setDebounce(value);
		}, time);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [value, time]);

	return debounce;
}

// function App() {
// 	// const { todos, loading } = useTodos(5);
// 	const online = useIsOnine();

// 	console.log(online);
// 	return (
// 		<>
// 			{/* {loading ? "Loading..." : todos.map((todo) => <Track todo={todo} />)} */}
// 			{online ? "Online" : "Offline"}
// 		</>
// 	);
// }

function Debounce() {
	const [debounceText, setDebounceText] = useState(false);
	let intervalId;

	return (
		<div>
			<input
				placeholder="enter product"
				onChange={() => {
					setDebounceText(false);
					clearInterval(intervalId);

					intervalId = setTimeout(() => {
						setDebounceText(true);
					}, 3000);
				}}
			/>
			<div>{debounceText && <span>Hi there </span>}</div>
		</div>
	);
}

function Track({ todo }) {
	return (
		<div>
			{todo.title}
			<br />
			{todo.description}
		</div>
	);
}

export default App;
