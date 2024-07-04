import React from "react";

const Button = ({ label, onClickParent }) => {
	return (
		<div className="pt-7 ">
			<button
				onClick={onClickParent}
				className="w-full bg-slate-300 bg-white text-black py-2 rounded hover:bg-green-500 hover:text-white duration-150"
			>
				{label}
			</button>
		</div>
	);
};

export default Button;
