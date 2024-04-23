import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Card from "./Card";
import BlueCard from "./BlueCard";
import Table from "./Table";

const Payments = () => {
	return (
		<div className="grid grid-cols-6">
			<div className="col-span-1">
				<Sidebar />
			</div>

			<div className="col-span-5 bg-slate-100">
				<Header />
				<div className=" px-10">
					<div className="flex justify-between py-7">
						<h2 className="text-xl font-semibold">Overview</h2>
						<select className="p-1 outline-none rounded-md" id="timeline">
							<option value="today">Today</option>
							<option value="week">This week</option>
							<option value="month">This month</option>
							<option value="year">This year</option>
						</select>
					</div>

					<div className="grid grid-cols-3 gap-5">
						<BlueCard title={"Next payout"} orders={23} amount={"2,312.23"} />
						<Card title={"Amount Pending"} orders={13} amount={"92,312.20"} />
						<Card title={"Amount Processed"} amount={"23,92,312.19"} />
					</div>

					<div className="py-10">
						<h2 className="text-xl font-semibold">Transactions | This Month</h2>
						<div className="mt-5 text-sm flex gap-5">
							<button className="bg-gray-300 text-gray-600 py-2 cursor-not-allowed px-5 rounded-3xl">
								Payouts (22)
							</button>
							<button className="bg-blue-500 text-white py-2 px-5 rounded-3xl">
								Refunds (6)
							</button>
						</div>
					</div>

					<Table />
				</div>
			</div>
		</div>
	);
};

export default Payments;
