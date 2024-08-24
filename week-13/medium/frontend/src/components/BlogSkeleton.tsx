const BlogSkeleton = () => {
	return (
		<div>
			<div className="my-10 px-32 grid grid-cols-12 gap-10">
				{/* Main Content Placeholder */}
				<div className="col-span-8 flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						{/* Title Placeholder */}
						<div className="h-10 bg-slate-300 rounded w-3/4"></div>
						<div className="h-10 bg-slate-300 rounded w-2/4"></div>

						{/* Date Placeholder */}
						<span className="h-4 bg-slate-300 rounded w-1/4"></span>
					</div>

					{/* Content Placeholder */}
					<div className="flex flex-col gap-2">
						<div className="h-4 bg-slate-300 rounded w-full"></div>
						<div className="h-4 bg-slate-300 rounded w-full"></div>
						<div className="h-4 bg-slate-300 rounded w-full"></div>
						<div className="h-4 bg-slate-300 rounded w-full"></div>
						<div className="h-4 bg-slate-300 rounded w-full"></div>
						<div className="h-4 bg-slate-300 rounded w-full"></div>
						<div className="h-4 bg-slate-300 rounded w-full"></div>
						<div className="h-4 bg-slate-300 rounded w-5/6"></div>
					</div>
				</div>

				{/* Author Section Placeholder */}
				<div className="col-span-4 mt-5">
					<div className="h-4 bg-slate-300 rounded w-1/4 mb-4"></div>{" "}
					{/* "Author" Text Placeholder */}
					<div className="grid grid-cols-10 my-4 gap-4">
						<div className="col-span-1 flex flex-col justify-center">
							{/* Avatar Placeholder */}
							<div className="w-12 h-12 bg-slate-300 rounded-full"></div>
						</div>

						<div className="col-span-9 ml-5">
							{/* Author Name Placeholder */}
							<div className="h-6 bg-slate-300 rounded w-2/4 mb-2"></div>
							{/* Catchphrase Placeholder */}
							<div className="h-4 bg-slate-300 rounded w-full mb-1"></div>
							<div className="h-4 bg-slate-300 rounded w-5/6"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogSkeleton;
