import { useRef, useState } from "react";

export default function Assignment6() {
	const [otpInput, setOtpInput] = useState(false);
	console.log("hi");

	return (
		<>
			{otpInput ? (
				<OTP />
			) : (
				<div>
					<h2>Login via OTP </h2>
					<input placeholder="Enter mobile nummber" />
					<button onClick={() => setOtpInput(true)}>Send OTP</button>
				</div>
			)}
		</>
	);
}

function OTP() {
	const otpRef = [useRef(), useRef(), useRef(), useRef()];

	const getOtp = () => {
		console.log(otpRef[0].current.value);
	};

	return (
		<div>
			{otpRef.map((eachField, index) => (
				<input ref={otpRef[index]} max={1} />
			))}
			<button onClick={getOtp}>Login</button>
		</div>
	);
}
