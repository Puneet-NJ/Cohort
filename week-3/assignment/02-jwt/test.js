const jwt = require("jsonwebtoken");

const decodeJwt = (token) => {
	console.log(jwt.decode(token));
};

decodeJwt("mnkjn;;ln;lknmkl");
