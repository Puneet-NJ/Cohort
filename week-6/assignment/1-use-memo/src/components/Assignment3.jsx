import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
	const [items, setItems] = useState([
		{ name: "Chocolates", value: 10 },
		{ name: "Chips", value: 20 },
		{ name: "Onion", value: 30 },
		{ name: "Tomato", value: 30 },
		// Add more items as needed
	]);
	const [click, setClick] = useState(false);

	// Your code starts here
	const totalValue = useMemo(() => {
		console.log("before");
		let val = 0;
		for (let i = 0; i < items.length; i++) val += items[i].value;
		return val;
	}, []);
	// let totalValue = 0;
	// console.log("before");
	// for (let i = 0; i < items.length; i++) totalValue += items[i].value;
	// console.log("after");

	// Your code ends here
	return (
		<div>
			<button onClick={() => setClick(!click)}>Click</button>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item.name} - Price: ${item.value}
					</li>
				))}
			</ul>
			<p>Total Value: {totalValue}</p>
		</div>
	);
};
