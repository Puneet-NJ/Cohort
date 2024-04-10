import { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { nameAtom } from "../store/atoms/bdayName";

export default function Assignment7() {
	const nameRef = useRef();
	const [name, setName] = useRecoilState(nameAtom);

	const handleName = () => {
		setName(nameRef.current.value);
	};

	return (
		<div>
			{!name ? (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleName();
					}}
				>
					<input required ref={nameRef} placeholder="Enter your name" />
					<button onSubmit={handleName}>Done</button>
				</form>
			) : (
				<BdayWishes />
			)}
		</div>
	);
}

function BdayWishes() {
	const name = useRecoilValue(nameAtom);

	const wishes = [
		"Happy Birthday, {name}! May your day be filled with joy and laughter.",
		"Wishing you, {name}, a fantastic birthday filled with love and happiness.",
		"Sending warm wishes to {name} on their special day. Happy Birthday!",
		"May this year be the best one yet for {name}! Happy Birthday!",
	];

	return (
		<div>
			{wishes.map((wish, i) => (
				<div key={i}>{wish.replace("{name}", name)}</div>
			))}
		</div>
	);
}
