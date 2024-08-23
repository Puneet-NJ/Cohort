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

const useBlogs = () => {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		axios({
			method: "GET",
			url: `${BACKEND_URL}/api/v1/blog/bulk`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((res) => {
			setBlogs(res.data.data);
			setLoading(false);
		});
	}, []);

	return { loading, blogs };
};

export default useBlogs;
