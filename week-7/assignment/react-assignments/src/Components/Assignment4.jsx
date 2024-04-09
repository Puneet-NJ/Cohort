import { useCallback, useRef, useState } from "react";

export default function Assignment4() {
	const [paragraph, setParagraph] = useState("");
	const inputRef = useRef();

	// const genWords = useCallback(() => {
	// 	const charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	// 	console.log("Re-runs");

	// 	let para = "";
	// 	for (let i = 1; i <= inputRef.current.value; i++) {
	// 		let word = "";
	// 		const wordLength = Math.floor(Math.random() * 10);
	// 		for (let j = 1; j <= wordLength; j++) {
	// 			word += charecters[Math.floor(Math.random() * charecters.length)];
	// 		}
	// 		word += " ";

	// 		para += word;
	// 	}

	// 	setParagraph(para);
	// }, []);
	const generateWords = () => {
		const charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		console.log("Re-runs");

		let para = "";
		for (let i = 1; i <= inputRef.current.value; i++) {
			console.log(i);
			let word = "";
			const wordLength = Math.floor(Math.random() * 10) + 1;
			for (let j = 1; j <= wordLength; j++) {
				word += charecters[Math.floor(Math.random() * charecters.length)];
			}
			word += " ";

			para += word;
			console.log(para);
		}

		setParagraph(para);
	};

	return (
		<div>
			<input ref={inputRef} placeholder="Enter no of words" />
			<button onClick={generateWords}>Generate</button>

			<div>{paragraph}</div>
		</div>
	);
}
