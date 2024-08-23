import { Link } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import { UserSignup } from "@puneet_nj/medium-common";
import { useState } from "react";

type FormType = {
	isSignin: true | false;
};

const Auth = ({ isSignin }: FormType) => {
	const [inputs, setInputs] = useState<UserSignup>({
		email: "",
		password: "",
		name: "",
	});

	return (
		<div className="flex flex-col justify-center items-center h-full">
			{/* <div className="bg-red-300"> */}
			<div className="text-center">
				<h1 className="text-3xl font-bold">
					{isSignin ? "Log into your account" : "Create an account"}
				</h1>
				<p className="text-slate-500 font-medium text-sm my-2">
					{isSignin ? "Create a new account?" : "Already have an account?"}{" "}
					<Link className="underline" to={isSignin ? "/signup" : "/signin"}>
						{isSignin ? "Signup" : "Login"}
					</Link>
				</p>
			</div>

			<div className="my-2 w-1/2">
				<LabelledInput
					label={"Name"}
					placeholder={"Puneet N J"}
					onChange={(e) => {
						setInputs((prev) => ({ ...prev, name: e.target.value }));
					}}
				/>
				<LabelledInput
					label={"Email"}
					placeholder={"puneet@gmail.com"}
					onChange={(e) => {
						setInputs((prev) => ({ ...prev, email: e.target.value }));
					}}
				/>
				<LabelledInput
					label={"Password"}
					type={"password"}
					onChange={(e) => {
						setInputs((prev) => ({ ...prev, password: e.target.value }));
					}}
				/>

				<button
					type="button"
					className="w-full my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
				>
					{isSignin ? "Login" : "Signup"}
				</button>
			</div>
		</div>
		// </div>
	);
};

export default Auth;
