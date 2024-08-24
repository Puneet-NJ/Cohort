import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const AppBar = () => {
	return (
		<div className="flex justify-between items-center px-16 text-lg py-6 border-b shadow-lg sticky top-0 z-10 bg-gray-300">
			<Link to="/blogs">
				<div className="font-medium">Medium</div>
			</Link>

			<div>
				<Avatar name="Puneet NJ" />
			</div>
		</div>
	);
};

export default AppBar;
