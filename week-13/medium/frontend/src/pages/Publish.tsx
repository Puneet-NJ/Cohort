import { useState } from "react";
import AppBar from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const handlePublishBlog = async () => {
		try {
			const response = await axios({
				method: "POST",
				url: `${BACKEND_URL}/api/v1/blog`,
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				data: {
					title,
					content,
				},
			});

			navigate(`/blog/${response.data.data.id}`);
		} catch (err) {
			alert("Error while creating blog");
		}
	};

	return (
		<div>
			<AppBar />

			<div className="mt-20 w-4/6 mx-auto">
				<div className="mb-6">
					<input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						type="text"
						placeholder="Enter title"
						className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
				</div>

				<textarea
					onChange={(e) => {
						setContent(e.target.value);
					}}
					id="message"
					rows={10}
					className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
					placeholder="Write your blog content here..."
				></textarea>

				<button
					type="submit"
					onClick={handlePublishBlog}
					className="mt-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800"
				>
					Publish Blog
				</button>
			</div>
		</div>
	);
};

export default Publish;
