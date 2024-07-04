import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="h-screen flex justify-center items-center bg-gray-500">
			<div className="text-white bg-black text-center w-1/4 px-8 py-5 rounded shadow-2xl">
				<Heading label={"Sign Up"} />
				<SubHeading label={"Enter your information to create your account"} />

				<InputBox
					onChange={(e) => setName(e.target.value)}
					label={"Name"}
					placeholder={"Puneet"}
				/>
				<InputBox
					onChange={(e) => setEmail(e.target.value)}
					label={"Email"}
					placeholder={"puneet@gmail.com"}
				/>
				<InputBox
					onChange={(e) => setPassword(e.target.value)}
					label={"Password"}
					placeholder={"Password"}
				/>

				<Button
					onClickParent={async () => {
						const response = await axios({
							method: "POST",
							url: "http://localhost:3000/api/v1/signup",
							data: {
								name,
								username: email,
								password,
							},
						});

						localStorage.setItem("token", response.data.token);
					}}
					label={"Signup"}
				/>
				<BottomWarning
					text={"Already have an account?"}
					btnText={"Signin"}
					to={"/signin"}
				/>
			</div>
		</div>
	);
};

export default Signup;
