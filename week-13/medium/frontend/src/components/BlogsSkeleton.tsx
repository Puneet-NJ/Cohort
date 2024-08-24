const BlogsSkeleton = () => {
	return (
		<div className="w-2/5 mx-auto animate-pulse">
			<div className="flex flex-col gap-6 py-8 border-b">
				<div className="flex items-center text-sm gap-2">
					<div className="w-10 h-10 bg-slate-300 rounded-full"></div>{" "}
					<div className="h-4 bg-slate-300 rounded w-1/4"></div>{" "}
					<div className="h-4 bg-slate-300 rounded w-1/6"></div>{" "}
				</div>

				<div className="flex flex-col gap-1">
					<div className="h-6 bg-slate-300 rounded w-3/4"></div>
					<div className="h-6 bg-slate-300 rounded w-2/4"></div>{" "}
				</div>

				<div className="font-light text-sm">
					<div className="h-4 bg-slate-300 rounded w-1/6"></div>{" "}
				</div>
			</div>
		</div>
	);
};

export default BlogsSkeleton;
