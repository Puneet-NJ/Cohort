import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
	const [input, setInput] = useState(0);
	const [click, setClick] = useState(false);

	// Your solution starts here
	const expensiveValue = useMemo(() => {
		console.log("Calculating factorial");
		let factorial = 1;

		for (let i = 1; i <= input; i++) factorial *= i;

		return factorial;
	}, [input]);
	// Your solution ends here

	return (
		<div>
			<input
				type="number"
				value={input}
				onChange={(e) => {
					console.log("hi");
					setInput(Number(e.target.value));
				}}
			/>
			<p>Calculated Value: {expensiveValue}</p>

			<button
				onClick={() => {
					console.log("button clicked");
					setClick(!click);
				}}
			>
				Click
			</button>
		</div>
	);
}
