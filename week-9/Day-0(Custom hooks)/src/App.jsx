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
	setInterval(callback, time);
};

function App() {
	const [count, setCount] = useState(0);

	useInterval(() => {
		setCount((c) => c + 1);
	}, 1000);

	return <>Timer is at {count}</>;
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
