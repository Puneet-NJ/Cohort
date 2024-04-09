import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeColor, colorAtom } from "../store/atoms/bgColor";

export default function Assignment2() {
	const setColor = useSetRecoilState(colorAtom);
	const style = useRecoilValue(changeColor);

	const handleColorChange = (e) => {
		setColor(e.target.innerHTML);
	};

	return (
		<div style={style}>
			<button onClick={handleColorChange}>red</button>
			<button onClick={handleColorChange}>green</button>
			<button onClick={handleColorChange}>yellow</button>
			<button onClick={handleColorChange}>purple</button>
			<button onClick={handleColorChange}>blue</button>
			<button onClick={handleColorChange}>gray</button>
		</div>
	);
}
