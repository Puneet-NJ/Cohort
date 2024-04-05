import { memo, useEffect, useState } from "react";
import "./App.css";

let counter = 4;

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setInterval(fetchData, 10000);
	}, []);

	const fetchData = async () => {
		const data = await fetch("https://dummyjson.com/users");
		const json = await data.json();
		console.log(json);
		setUsers(json.users);
	};

	return (
		<div>
			{users.map((user) => (
				<div>{user.firstName}</div>
			))}
		</div>
	);
}

export default App;
