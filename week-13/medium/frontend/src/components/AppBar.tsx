import Avatar from "./Avatar";

const AppBar = () => {
	return (
		<div className="flex justify-between items-center px-16 text-lg py-4 border-b shadow-lg sticky top-0 z-10 bg-gray-300 mb-5">
			<div className="font-medium">Medium</div>

			<div>
				<Avatar name="Puneet NJ" />
			</div>
		</div>
	);
};

export default AppBar;
