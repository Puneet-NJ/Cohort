import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
	id: string;
	title: string;
	content: string;
	publishedAt: string;
	author: {
		name: string;
	};
}

const useBlog = ({ id }: { id: string }) => {
	const [loading, setLoading] = useState(true);
	const [blog, setBlog] = useState<Blog>();

	useEffect(() => {
		axios({
			method: "GET",
			url: `${BACKEND_URL}/api/v1/blog/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((response) => {
			setBlog(response.data.data);
			setLoading(false);
		});
	}, [id]);

	return { loading, blog };
};

export default useBlog;
