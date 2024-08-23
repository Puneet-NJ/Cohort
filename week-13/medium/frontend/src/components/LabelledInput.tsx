import { ChangeEvent } from "react";

interface Props {
	label: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	type?: "password";
}

const LabelledInput = ({ label, placeholder, onChange, type }: Props) => {
	return (
		<div className="my-4">
			<label
				htmlFor={label}
				className="block mb-1 text-sm font-semibold text-gray-900"
			>
				{label}
			</label>
			<input
				type={type || "text"}
				id={label}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
				placeholder={placeholder}
				required
				onChange={onChange}
			/>
		</div>
	);
};

export default LabelledInput;
