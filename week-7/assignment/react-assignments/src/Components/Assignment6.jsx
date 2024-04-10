import { useRef, useState } from "react";

export default function Assignment6() {
	const [otpInput, setOtpInput] = useState(false);

	return (
		<>
			<h2>Login via OTP </h2>
			{otpInput ? (
				<OTP />
			) : (
				<div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setOtpInput(true);
						}}
					>
						<input required placeholder="Enter mobile nummber" />
						<button onSubmit={() => setOtpInput(true)}>Send OTP</button>
					</form>
				</div>
			)}
		</>
	);
}

function OTP() {
	const otpRef = [useRef(), useRef(), useRef(), useRef()];

	const getOtp = () => {
		let otp = "";

		const transformFunc = (eachField, index) => {
			otp += Number(eachField.current.value);
		};
		otpRef.map(transformFunc);
		console.log(otp);
	};

	const handleNextInput = (e, index) => {
		if (parseInt(e.target.value) > parseInt(e.target.max)) {
			if (index != otpRef.length - 1)
				otpRef[index + 1].current.value = Math.floor(e.target.value % 10);
			otpRef[index].current.value = Math.floor(e.target.value.toString()[0]);
		}

		if (index != otpRef.length - 1) otpRef[index + 1].current.focus();
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					getOtp();
				}}
			>
				{otpRef.map((eachField, index) => (
					<input
						key={index}
						required
						onChange={(e) => handleNextInput(e, index)}
						ref={otpRef[index]}
						type="number"
						max={9}
						min={0}
					/>
				))}
				<button onSubmit={getOtp}>Login</button>
			</form>
		</div>
	);
}
