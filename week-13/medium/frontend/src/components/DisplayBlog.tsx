import Avatar from "./Avatar";

interface Props {
	authorName: string;
	publishedDate: string;
	title: string;
	content: string;
}

const DisplayBlog = ({
	authorName = "",
	publishedDate,
	title,
	content,
}: Props) => {
	const actualDate = new Date(publishedDate);

	return (
		<div className="flex flex-col gap-6 w-2/5 mx-auto py-8 border-b">
			<div className="text-sm">
				<Avatar name={authorName} />
				<span className="pl-2">{authorName} </span>
				<span className="text-slate-500">• {actualDate.toDateString()}</span>
			</div>

			<div className="flex flex-col gap-1">
				<div className="text-2xl font-extrabold">{title}</div>
				<div className="line-clamp-2">{content}</div>
			</div>

			<div className="font-light text-sm">
				<span className="text-slate-500">
					{Math.ceil(content.split(" ").length / 100)} min read
				</span>
			</div>
		</div>
	);
};

export default DisplayBlog;
