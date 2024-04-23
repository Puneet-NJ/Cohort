import React from "react";
import Card from "./Card";

const BlueCard = ({ title, amount, orders }) => {
	return (
		<div className="bg-blue-500 text-white shadow-md rounded-md ">
			<div className="p-8 hover:bg-blue-400 rounded-t-md">
				<h3 className="flex items-center">
					{title}{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-4 h-4 ml-1"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
						></path>
					</svg>
				</h3>
				<div className="flex justify-between mt-4">
					<div className="text-2xl font-semibold">₹ {amount}</div>
					{orders && (
						<div className="flex items-center underline cursor-pointer font-semibold">
							{orders} orders
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</div>
					)}
				</div>
			</div>

			<div className="text-sm px-8 py-2 flex justify-between bg-blue-600">
				<div>Next payout date: </div>
				<div>Today, 04:00 PM</div>
			</div>
		</div>
	);
};

export default BlueCard;
