import { Link } from "react-router-dom";

interface Props {
	Heading: string;
	alternateText: string;
	alternateLink: string;
	alternateOption: string;
}

const FormHeading = ({
	Heading,
	alternateText,
	alternateLink,
	alternateOption,
}: Props) => {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold">{Heading}</h1>
			<p className="text-slate-500 font-medium text-sm my-2">
				{alternateText}{" "}
				<Link className="underline" to={alternateLink}>
					{alternateOption}
				</Link>
			</p>
		</div>
	);
};

export default FormHeading;
