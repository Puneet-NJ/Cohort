import { useContext } from "react";
import { CountContext } from "./Context";
import {
	RecoilRoot,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
	return (
		<div>
			<RecoilRoot>
				<Count />
			</RecoilRoot>
		</div>
	);
}

function Count() {
	console.log("Count changed");
	return (
		<div>
			<CountRenderer />
			<Buttons />
		</div>
	);
}

function CountRenderer() {
	const count = useRecoilValue(countAtom);
	return <div>{count}</div>;
}

function Buttons() {
	const setCount = useSetRecoilState(countAtom);
	console.log("Button re-rendered");

	return (
		<div>
			<button
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Increase
			</button>

			<button
				onClick={() => {
					setCount((count) => count - 1);
				}}
			>
				Decrease
			</button>
			<Even />
		</div>
	);
}

function Even() {
	const isEven = useRecoilValue(evenSelector);

	return <div>{isEven ? "Count is even" : ""}</div>;
}

export default App;
