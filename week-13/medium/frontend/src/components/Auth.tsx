import { Link } from "react-router-dom";
import LabelledInput from "./LabelledInput";

const Auth = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-center">
				<h1 className="text-3xl font-bold">Create an account</h1>
				<p className="text-slate-500 font-medium text-sm">
					Already have an account?{" "}
					<Link className="underline" to={"/signin"}>
						Login
					</Link>
				</p>
			</div>

			<div>
				<LabelledInput />
				<LabelledInput />
				<LabelledInput />
			</div>

			<button
				type="button"
				className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
			>
				Dark
			</button>
		</div>
	);
};

export default Auth;
