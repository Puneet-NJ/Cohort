import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import axios from "axios";

const Todo = ({ title, description, completed, id, setParentRender }) => {
	const [check, setCheck] = useState(completed);

	return (
		<div className="mt-3 rounded-lg flex items-start gap-3 bg-white shadow-xl border border-gray-400 py-2 px-6">
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

			<div className="">
				<button
					onClick={async () => {
						const response = await axios({
							method: "DELETE",
							url: `http://localhost:3000/api/v1/deleteTodo?id=${id}`,
							headers: {
								Authorization: `Bearer ${localStorage.getItem("token")}`,
							},
						});

						setParentRender((prev) => !prev);
					}}
					className="mt-7 bg-red-600 p-1 rounded-full"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Todo;
