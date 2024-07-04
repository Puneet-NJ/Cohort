import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import axios from "axios";

const Todo = ({ title, description, completed, id }) => {
	const [check, setCheck] = useState(completed);

	return (
		<div className="mt-3 rounded-lg flex items-start gap-1 bg-white shadow-xl border border-gray-400 py-2 px-6">
			<Checkbox
				color="green"
				checked={check}
				onChange={async () => {
					const response = await axios({
						method: "PUT",
						url: `http://localhost:3000/api/v1/updateTodo?id=${id}&completed=${!check}`,
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					});

					setCheck((prev) => !prev);
				}}
			/>
			<div className="w-full">
				<div className="text-3xl px-2 py-1 font-semibold border-b border-gray-300">
					{title}
				</div>
				<div className="px-2 py-1 h-20 overflow-scroll">{description}</div>
			</div>
		</div>
	);
};

export default Todo;
