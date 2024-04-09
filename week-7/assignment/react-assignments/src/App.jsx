import { useState } from "react";
// import "./App.css";
import Assignment1 from "./Components/Assignment1";
import { RecoilRoot } from "recoil";
import Assignment2 from "./Components/Assignment2";
import Assignment4 from "./Components/Assignment4";
import Assignment5 from "./Components/Assignment5";
import Assignment6 from "./Components/Assignment6";

function App() {
	return (
		<RecoilRoot>
			{/* <Assignment1 /> */}
			{/* <Assignment2 /> */}
			{/* <Assignment4 /> */}
			{/* <Assignment5 /> */}
			<Assignment6 />
		</RecoilRoot>
	);
}

export default App;
