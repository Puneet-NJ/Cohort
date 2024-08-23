interface Props {
	label: string;
	onClick: () => void;
}

const FormButton = ({ label, onClick }: Props) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="w-full my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
		>
			{label}
		</button>
	);
};

export default FormButton;
