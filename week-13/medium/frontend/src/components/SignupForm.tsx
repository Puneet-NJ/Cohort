import { UserSignup } from "@puneet_nj/medium-common";
import { useState } from "react";
import LabelledInput from "./LabelledInput";
import FormButton from "./FormButton";
import FormHeading from "./FormHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const SignupForm = () => {
	const [inputs, setInputs] = useState<UserSignup>({
		email: "",
		password: "",
		name: "",
	});
	const navigate = useNavigate();

	const handleSignup = async () => {
		try {
			const response = await axios({
				method: "POST",
				url: `${BACKEND_URL}/api/v1/user/signup`,
				data: {
					name: inputs.name,
					email: inputs.email,
					password: inputs.password,
				},
			});

			localStorage.setItem("token", response.data.token);
			navigate("/blogs");
		} catch (err) {
			alert("Error while Signing up");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<FormHeading
				Heading={"Create an account"}
				alternateText={"Already have an account?"}
				alternateLink={"/signin"}
				alternateOption={"Login"}
			/>

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

				<FormButton onClick={handleSignup} label="Signup" />
			</div>
		</div>
	);
};

export default SignupForm;
