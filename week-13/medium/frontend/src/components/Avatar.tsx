const Avatar = ({ name }: { name: string }) => {
	const nameArray = name?.split(" ") || "Anonymous";

	return (
		<div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
			<span className="font-medium text-xs text-gray-600 dark:text-gray-300">
				{nameArray[0][0] +
					(nameArray?.[1] === undefined ? "" : nameArray[1][0])}
			</span>
		</div>
	);
};

export default Avatar;
