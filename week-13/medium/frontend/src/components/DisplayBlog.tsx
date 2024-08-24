import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface Props {
	authorName: string;
	publishedDate: string;
	title: string;
	content: string;
	id: string;
}

const DisplayBlog = ({
	authorName = "",
	publishedDate,
	title,
	content,
	id,
}: Props) => {
	const actualDate = new Date(publishedDate);

	return (
		<div className="w-2/5 mx-auto hover:scale-95 hover:bg-slate-100 hover:px-7 duration-150">
			<Link to={`/blog/${id}`}>
				<div className="flex flex-col gap-6 py-8 border-b">
					<div className="text-sm">
						<Avatar name={authorName} />
						<span className="pl-2">{authorName} </span>
						<span className="text-slate-500">
							• {actualDate.toDateString()}
						</span>
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
			</Link>
		</div>
	);
};

export default DisplayBlog;
