import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import useBlog from "../hooks/useBlog";
import Avatar from "../components/Avatar";
import BlogSkeleton from "../components/BlogSkeleton";

const Blog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog({ id: id || "" });

	if (loading || !blog)
		return (
			<div>
				<AppBar />

				<BlogSkeleton />
			</div>
		);
	return (
		<div>
			<AppBar />

			<div className="my-10 px-32 grid grid-cols-12 gap-10">
				<div className="col-span-8 flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<div className="text-5xl font-extrabold leading-snug">
							{blog.title}
						</div>
						<span className="text-slate-500">
							Posted on {new Date(blog.publishedAt).toDateString()}
						</span>
					</div>

					<div className="text-slate-600 font-medium">{blog.content}</div>
				</div>
				<div className="col-span-4 mt-5">
					<div className="font-medium underline">Author</div>

					<div className="grid grid-cols-10 my-4">
						<div className="col-span-1 flex flex-col justify-center">
							<Avatar name={blog.author.name} />
						</div>

						<div className="col-span-9">
							<div className="font-bold text-2xl">
								{blog.author.name || "Anonymous"}
							</div>
							<div className="text-slate-500">
								Some catch phrase from Author to grab User's attention
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
