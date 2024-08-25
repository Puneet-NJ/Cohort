export default function ({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="text-center bg-slate-200">30% off for the next 2days</div>

			{children}
		</>
	);
}
