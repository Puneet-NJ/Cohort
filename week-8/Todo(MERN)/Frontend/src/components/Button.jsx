import React from "react";

const Button = ({ label }) => {
	return (
		<div className="pt-7">
			<button className="w-full bg-slate-300 text-black py-2 rounded hover:bg-slate-600 hover:text-white duration-150">
				{label}
			</button>
		</div>
	);
};

export default Button;
