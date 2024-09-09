import { Card } from "@repo/ui/card";

export const P2pTransfers = ({
	transfers,
}: {
	transfers: {
		id: number;
		timestamp: Date;
		amount: number;
		// TODO: Can the type of `status` be more specific?
		fromUsedId: number;
		toUserId: number;
	}[];
}) => {
	if (!transfers.length) {
		return (
			<Card title="Recent transfers">
				<div className="text-center pb-8 pt-8">No Recent transfers</div>
			</Card>
		);
	}

	return (
		<Card title="Recent transfers">
			<div className="pt-2">
				{transfers.map((t) => (
					<div className="flex justify-between">
						<div>
							<div className="text-sm">Received INR</div>
							<div className="text-slate-600 text-xs">
								{t.timestamp.toDateString()}
							</div>
						</div>
						<div className="flex flex-col justify-center">
							- Rs {t.amount / 100}
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};
