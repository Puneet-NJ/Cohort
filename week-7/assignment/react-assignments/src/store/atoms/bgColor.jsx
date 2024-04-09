import { atom, selector } from "recoil";

export const colorAtom = atom({
	key: "colorAtom",
	default: "gray",
});

export const changeColor = selector({
	key: "changeColor",
	get: ({ get }) => {
		const color = get(colorAtom);
		const style = {
			width: "100vw",
			height: "100vh",
			backgroundColor: color,
		};

		return style;
	},
});
