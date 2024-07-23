import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			axios({
				url: "https://sum-server.100xdevs.com/todos",
				method: "GET",
			}).then((res) => {
				setTodos(res.data.todos);
				setLoading(false);
			});
		}, n * 1000);

		axios({
			url: "https://sum-server.100xdevs.com/todos",
			method: "GET",
		}).then((res) => {
			setTodos(res.data.todos);
			setLoading(false);
		});

		return () => {
			clearInterval(intervalId);
		};
	}, [n]);

	return { todos, loading };
}

// function App() {
// 	const { todos, loading } = useTodos(5);
// 	const online = isOnline();

// 	if (loading) return <div>Loading...</div>;
// 	// if (online) return <div>Online....</div>;
// 	return (
// 		<>
// 			{todos.map((todo) => (
// 				<Track todo={todo} />
// 			))}
// 		</>
// 	);
// }

// function App() {
// 	const [count, setCount] = useState(0);

// 	useInterval(() => {
// 		setCount((c) => c + 1);
// 	}, 1000);

// 	return <>Timer is at {count}</>;
// }

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

const SearchBar = () => {
	const [inputVal, setInputVal] = useState("");
	const debounceVal = useDebouce(inputVal, 500);

	useEffect(() => {}, []);

	console.log(debounceVal);
	return (
		<div>
			<input
				placeholder="Enter an item"
				onChange={(e) => {
					setInputVal(e.target.value);
				}}
			/>
		</div>
	);
};

const useDebouce = (value, time) => {
	const [debounceVal, setDebounceVal] = useState(value);

	useEffect(() => {
		// Check the value hasn't changed for time secs and only then update the value
		const id = setTimeout(() => setDebounceVal(value), time);

		return () => {
			clearTimeout(id);
		};
	}, [value, time]);

	return debounceVal;
};

const useInterval = (callback, time) => {
	useEffect(() => {
		setInterval(callback, time);
	}, [callback, time]);
};

const isOnline = () => {
	const [isOnline, setIsOnline] = useState(window.navigator.onLine);

	// console.log(window.navigator.onLine);
	useEffect(() => {
		window.addEventListener("online", () => setIsOnline(true));
		window.addEventListener("offline", () => setIsOnline(false));
	}, []);

	return isOnline;
};

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
