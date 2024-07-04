import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todos from "./pages/Todos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/todo" element={<Todos />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
