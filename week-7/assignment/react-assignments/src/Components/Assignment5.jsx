import axios from "axios";
import { useEffect, useState } from "react";

export default function Assignment5() {
	const [profile, setProfile] = useState({});

	useEffect(() => {
		axios.get("https://api.github.com/users/puneet-nj").then((res) => {
			console.log(res);
			setProfile(res.data);
		});
	}, []);

	return (
		<div>
			<img src={profile.avatar_url} alt="avatar" />
			<div>name: {profile.name}</div>
			<div>followers: {profile.followers}</div>
			<div>following: {profile.following}</div>
		</div>
	);
}
