import { useEffect } from "react";

const anchorTag = {
	type: "a",
	props: {
		href: "https://google.com/",
		target: "_blank",
		innerText: "Click me",
	},
};

function createHtml(element) {
	const eleToCreate = document.createElement(element.type);

	for (const prop in element.props) {
		if (prop === "innerText") eleToCreate.innerText = element.props[prop];
		eleToCreate.setAttribute(prop, element.props[prop]);
	}

	return eleToCreate;
}

function customRender(element, path) {
	const createdHtml = createHtml(element);
	const selectedEle = document.querySelector(path);

	selectedEle.appendChild(createdHtml);
}

export default function Assignment3() {
	useEffect(() => {
		customRender(anchorTag, "#root");
	}, []);

	return <div></div>;
}
