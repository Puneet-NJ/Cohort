"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import p2pTransfer from "../app/actions/p2pTransfer";
import { P2pTransfers } from "./P2pTransfers";
import prisma from "@repo/db/client";

const getP2pTransfers = async () => {
	return await prisma.p2pTransfer.findMany({});
};

export default async function () {
	const [phone, setPhone] = useState("");
	const [amount, setAmount] = useState("");
	const transfers = await getP2pTransfers();

	return (
		<div className="h-screen">
			<div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
				P2P Transfer
			</div>
			<div className="flex justify-center items-center mt-32">
				<div className="w-1/4">
					<Card title="Send">
						<TextInput
							placeholder="1111111111"
							label="Phone"
							onChange={(value) => setPhone(value)}
						/>
						<TextInput
							placeholder="1000"
							label="Amount"
							onChange={(value) => setAmount(value)}
						/>

						<div className="flex justify-center pt-4">
							<Button
								onClick={async () => {
									const res = await p2pTransfer(phone, Number(amount) * 100);
									console.log(res);
								}}
							>
								Send
							</Button>
						</div>
					</Card>
				</div>
				<div className="pt-4">
					<P2pTransfers transfers={transfers} />
				</div>
			</div>
		</div>
	);
}
