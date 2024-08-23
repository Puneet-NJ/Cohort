import { UserSignin } from "@puneet_nj/medium-common";
import { useState } from "react";
import LabelledInput from "./LabelledInput";
import FormHeading from "./FormHeading";
import FormButton from "./FormButton";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
	const [inputs, setInputs] = useState<UserSignin>({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleSignin = async () => {
		try {
			const response = await axios({
				method: "POST",
				url: `${BACKEND_URL}/api/v1/user/signin`,
				data: {
					email: inputs.email,
					password: inputs.password,
				},
			});

			localStorage.setItem("token", response.data.token);
			navigate("/blogs");
		} catch (err) {
			alert("Error while Signing in");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<FormHeading
				Heading={"Log into your account"}
				alternateText={"Create a new account?"}
				alternateLink={"/signup"}
				alternateOption={"Signup"}
			/>

			<div className="my-2 w-1/2">
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

				<FormButton onClick={handleSignin} label="Login" />
			</div>
		</div>
	);
};

export default SigninForm;
