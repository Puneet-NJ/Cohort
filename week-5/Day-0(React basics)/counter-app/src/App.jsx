import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<CustomButton counter={counter} setCounter={setCounter} />
		</div>
	);
}

function CustomButton(props) {
	console.log(props);
	const handleIncCount = () => {
		props.setCounter(props.counter + 1);
	};

	return <button onClick={handleIncCount}>Counter {props.counter}</button>;
}

export default App;
