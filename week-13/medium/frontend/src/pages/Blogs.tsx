import AppBar from "../components/AppBar";
import DisplayBlog from "../components/DisplayBlog";
import useBlogs from "../hooks/useBlogs";

const Blogs = () => {
	const { loading, blogs } = useBlogs();

	if (loading) return <div>Loading...</div>;
	return (
		<div>
			<AppBar />

			<div className="">
				{blogs.map((blog) => (
					<DisplayBlog
						key={blog.id}
						authorName={blog.author.name || ""}
						publishedDate={blog.publishedAt}
						title={blog.title}
						content={blog.content}
					/>
				))}

				{/* <DisplayBlog
					authorName="Peter V"
					publishedDate="Dec 3 2023"
					title="How an Ugly Single-Page Website makes $5000 a month with affiliate marketing"
					content="Yes, your current TypeScript code already does the job. Since all the properties in the Props interface are required, TypeScript will enforce that all of them are passed to the FormHeading component at compile-time. If any prop is missing when the component is used, TypeScript will throw a compile-time error, ensuring that no one can omit any of the required props. As long as your TypeScript project is set up with type checking (and ideally with strict mode enabled in your tsconfig.json), you’re covered. So there's no need to add anything extra—TypeScript will complain if any of the props are missing."
				/>

				<DisplayBlog
					authorName="Peter V"
					publishedDate="Dec 3 2023"
					title="How an Ugly Single-Page Website makes $5000 a month with affiliate marketing"
					content="Yes, your current TypeScript code already does the job. Since all the properties in the Props interface are required, TypeScript will enforce that all of them are passed to the FormHeading component at compile-time. If any prop is missing when the component is used, TypeScript will throw a compile-time error, ensuring that no one can omit any of the required props. As long as your TypeScript project is set up with type checking (and ideally with strict mode enabled in your tsconfig.json), you’re covered. So there's no need to add anything extra—TypeScript will complain if any of the props are missing."
				/>

				<DisplayBlog
					authorName="Peter V"
					publishedDate="Dec 3 2023"
					title="How an Ugly Single-Page Website makes $5000 a month with affiliate marketing"
					content="Yes, your current TypeScript code already does the job. Since all the properties in the Props interface are required, TypeScript will enforce that all of them are passed to the FormHeading component at compile-time. If any prop is missing when the component is used, TypeScript will throw a compile-time error, ensuring that no one can omit any of the required props. As long as your TypeScript project is set up with type checking (and ideally with strict mode enabled in your tsconfig.json), you’re covered. So there's no need to add anything extra—TypeScript will complain if any of the props are missing."
				/>

				<DisplayBlog
					authorName="Peter V"
					publishedDate="Dec 3 2023"
					title="How an Ugly Single-Page Website makes $5000 a month with affiliate marketing"
					content="Yes, your current TypeScript code already does the job. Since all the properties in the Props interface are required, TypeScript will enforce that all of them are passed to the FormHeading component at compile-time. If any prop is missing when the component is used, TypeScript will throw a compile-time error, ensuring that no one can omit any of the required props. As long as your TypeScript project is set up with type checking (and ideally with strict mode enabled in your tsconfig.json), you’re covered. So there's no need to add anything extra—TypeScript will complain if any of the props are missing."
				/>

				<DisplayBlog
					authorName="Peter V"
					publishedDate="Dec 3 2023"
					title="How an Ugly Single-Page Website makes $5000 a month with affiliate marketing"
					content="Yes, your current TypeScript code already does the job. Since all the properties in the Props interface are required, TypeScript will enforce that all of them are passed to the FormHeading component at compile-time. If any prop is missing when the component is used, TypeScript will throw a compile-time error, ensuring that no one can omit any of the required props. As long as your TypeScript project is set up with type checking (and ideally with strict mode enabled in your tsconfig.json), you’re covered. So there's no need to add anything extra—TypeScript will complain if any of the props are missing."
				/> */}
			</div>
		</div>
	);
};

export default Blogs;
