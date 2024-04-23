import React from "react";
import { orderData } from "../mockData/data";

const Table = () => {
	return (
		<div className="bg-white p-5 shadow-lg rounded-md">
			<div className="flex justify-between">
				<div className="w-96 h-10 rounded flex items-center border border-black-150">
					<div className="pl-4 pr-4">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
								fill="#808080"
							/>
						</svg>
					</div>
					<form action="" className="w-full">
						<input
							placeholder="Order ID or transaction ID"
							type="text"
							className="w-full bg-inherit text-base pl border-none focus:outline-none"
						/>
					</form>
				</div>
				<div className="flex gap-3 text-sm">
					<button className="flex items-center py-1 px-3 border border-gray-400 rounded">
						Sort
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="ml-1 w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
							/>
						</svg>
					</button>
					<button className="py-1 px-3 border border-gray-400 rounded">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
							/>
						</svg>
					</button>
				</div>
			</div>

			<table class="my-8 w-full text-sm text-left rtl:text-right text-gray-500 ">
				<thead class="text-xm font-medium rounded uppercase text-black-400">
					<tr>
						<th scope="col" class="px-6 py-3 font-medium">
							order ID
						</th>
						<th scope="col" class="px-6 py-3 font-medium">
							Status
						</th>
						<th scope="col" class="px-6 py-3 font-medium">
							Transaction ID
						</th>
						<th scope="col" class="px-6 py-3 font-medium">
							Refund date
						</th>
						<th scope="col" class="px-6 py-3 text-right font-medium">
							Order amount
						</th>
					</tr>
				</thead>
				{orderData.map((order) => {
					return (
						<tbody>
							<tr class="bg-white border-b">
								<td
									scope="row"
									class="px-6 py-4 font-medium text-blue-700 whitespace-nowrap"
								>
									#{order.id}
								</td>
								<td class="px-6 py-4 flex items-center gap-2 text-black-600">
									{order.status === "Successful" && (
										<div className="h-2.5 w-2.5 rounded-full bg-green-500" />
									)}
									{order.status === "Processing" && (
										<div className="h-2.5 w-2.5 rounded-full bg-gray-500" />
									)}
									{order.status === "Failed" && (
										<div className="h-2.5 w-2.5 rounded-full bg-red-500" />
									)}
									{order.status}
								</td>
								<td class="px-6 py-4 text-black-400">{order.transactionID}</td>
								<td class="px-6 py-4 text-black-400">{order.refundDate}</td>
								<td class="px-6 py-4 text-right text-black-600">
									{order.amount}
								</td>
							</tr>
						</tbody>
					);
				})}
			</table>
		</div>
	);
};

export default Table;

/**
 * <form className="max-w-md mx-auto">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search Mockups, Logos..."
							required
						/>
						<button
							type="submit"
							className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Search
						</button>
					</div>
				</form>
 */
