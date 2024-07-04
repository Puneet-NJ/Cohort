import React from "react";
import { Link } from "react-router-dom";

const BottomWarning = ({ text, btnText, to }) => {
	return (
		<div className="text-sm pt-4">
			<span>{text} </span>

			<Link className="underline" to={to}>
				{btnText}
			</Link>
		</div>
	);
};

export default BottomWarning;
