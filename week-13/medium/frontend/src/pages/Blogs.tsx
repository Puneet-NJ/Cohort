import AppBar from "../components/AppBar";
import BlogsSkeleton from "../components/BlogsSkeleton";
import DisplayBlog from "../components/DisplayBlog";
import useBlogs from "../hooks/useBlogs";

const Blogs = () => {
	const { loading, blogs } = useBlogs();

	if (loading)
		return (
			<div>
				<AppBar />

				<BlogsSkeleton />
				<BlogsSkeleton />
				<BlogsSkeleton />
				<BlogsSkeleton />
				<BlogsSkeleton />
			</div>
		);

	return (
		<div>
			<AppBar />

			<div className="my-7">
				{blogs.map((blog) => (
					<DisplayBlog
						authorName={blog.author.name || "Anonymous"}
						publishedDate={blog.publishedAt}
						title={blog.title}
						content={blog.content}
						id={blog.id}
						key={blog.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Blogs;
