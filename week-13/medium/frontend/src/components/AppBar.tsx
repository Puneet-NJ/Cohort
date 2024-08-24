import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const AppBar = () => {
	return (
		<div className="flex justify-between items-center px-16 text-lg py-6 border-b shadow-lg sticky top-0 z-10 bg-gray-300">
			<Link to="/blogs">
				<div className="font-medium">Medium</div>
			</Link>

			<div className="flex items-center gap-5">
				<Link to={"/publish"}>
					<button
						type="button"
						className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
					>
						Write a Blog
					</button>
				</Link>

				<Avatar name="Puneet NJ" />
			</div>
		</div>
	);
};

export default AppBar;
