"use client";

export const HiButton = () => {
	return (
		<div>
			<button
				onClick={() => {
					alert("Hi");
				}}
			>
				hi
			</button>
		</div>
	);
};
