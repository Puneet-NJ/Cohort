const BuisnessCard = ({ person }) => {
	return (
		<div>
			<h1>{person.name}</h1>
			<p>{person.description}</p>

			<h2>Interests</h2>
			{person.interests.map((interest) => (
				<div key={interest}>{interest}</div>
			))}

			<div>
				<h2>Socials</h2>
				{person.socials.map((social) => (
					<div key={social.link}>
						<a href={social.link}>{social.name}</a>
					</div>
				))}
			</div>

			<hr />
		</div>
	);
};

export default BuisnessCard;
