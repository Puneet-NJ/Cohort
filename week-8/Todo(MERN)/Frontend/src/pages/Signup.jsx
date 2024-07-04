import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

const Signup = () => {
	return (
		<div className="h-screen flex justify-center items-center bg-gray-500">
			<div className="text-white bg-black text-center w-1/4 px-8 py-5 rounded shadow-2xl">
				<Heading label={"Sign Up"} />
				<SubHeading label={"Enter your information to create your account"} />

				<InputBox label={"Name"} placeholder={"Puneet"} />
				<InputBox label={"Email"} placeholder={"puneet@gmail.com"} />
				<InputBox label={"Password"} placeholder={"Password"} />

				<Button label={"Signup"} />
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
