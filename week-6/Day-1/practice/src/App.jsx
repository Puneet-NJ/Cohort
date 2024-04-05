import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [count, setCount] = useState(0);

	const greet = useCallback(() => {
		console.log("Hi Puneet");
	}, []);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Counter: {count}</button>
			<Todo id={greet} />
		</div>
	);
}

const Todo = ({ id }) => {
	console.log("Child component re-rendered");

	return <div>Hi there</div>;
};

function User({ name, bDate }) {
	return (
		<div>
			<b>{name}</b>: {bDate}
		</div>
	);
}

export default App;
