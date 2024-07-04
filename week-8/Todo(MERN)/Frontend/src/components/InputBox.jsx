import React, { useState } from "react";

const InputBox = ({ label, placeholder, onChange }) => {
	return (
		<div className="text-left py-2">
			<label className="font-semibold text-sm" htmlFor={label}>
				{label}
			</label>
			<input
				id={label}
				placeholder={placeholder}
				onChange={onChange}
				className="mt-1 w-full px-3 py-2 outline-none border text-gray-600 border-gray-400 rounded"
			/>
		</div>
	);
};

export default InputBox;
