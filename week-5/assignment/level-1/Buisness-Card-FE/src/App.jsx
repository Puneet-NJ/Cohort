import { useEffect, useRef, useState } from "react";
import "./App.css";
import BuisnessCard from "./Components/BuisnessCard";

function App() {
	const [cards, setCards] = useState([]);
	const [token, setToken] = useState(null);
	const nameRef = useRef();
	const descriptionRef = useRef();
	const interestsRef = useRef();
	const socialsRef = useRef();

	useEffect(() => {
		setInterval(getCards, 5000);
	}, []);

	useEffect(() => {
		getToken();
	}, []);

	const getCards = async () => {
		const data = await fetch("http://localhost:3000/user/cards");
		const json = await data.json();
		setCards(json.cards);
	};

	const addCard = async () => {
		const name = nameRef.current.value;
		const description = descriptionRef.current.value;
		let interests = interestsRef.current.value.split(",");
		let socials = socialsRef.current.value.split(",");

		const modifiedsocials = [];
		socials.map((social) => {
			modifiedsocials.push({
				name: social.split(":")[0].trim(),
				link: social.split(":")[1].trim(),
			});
		});

		const card = {
			name,
			description,
			interests,
			socials: modifiedsocials,
		};

		// await getToken();

		console.log(typeof token);
		const data = await fetch("http://localhost:3000/admin/createCard", {
			method: "POST",
			body: JSON.stringify(card),
			headers: {
				authorization: token,
				"content-Type": "application/json",
			},
		});
		const json = await data.json();
		console.log(json);
	};

	const getToken = async () => {
		const data = await fetch("http://localhost:3000/admin/signin", {
			method: "POST",
			body: JSON.stringify({
				username: "admin1",
				password: "pass",
			}),
			headers: {
				"content-Type": "application/json",
			},
		});
		const json = await data.json();
		setToken(json.token);
	};

	return (
		<div>
			<div>
				<br />
				<br />
				<input ref={nameRef} placeholder="name" />
				<input ref={descriptionRef} placeholder="description" />
				<input ref={interestsRef} placeholder="interests" />
				<input ref={socialsRef} placeholder="socials" />
				<br />
				<br />
				<button onClick={addCard}>Add Card</button>
			</div>
			<div>
				{cards.map((card) => (
					<BuisnessCard key={card._id} person={card} />
				))}
			</div>
		</div>
	);
}

export default App;
