const fetchPersons = async () => {
	const response = await fetch("https://fakerapi.it/api/v1/persons");
	const jsonData = await response.json();
	console.log(jsonData);
};

fetchPersons();
