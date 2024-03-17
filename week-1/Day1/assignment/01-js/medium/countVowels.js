/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
// 	str = str.toLowerCase();

// 	let count = 0;

// 	for (let charecter of str) {
// 		if (
// 			charecter === "a" ||
// 			charecter === "e" ||
// 			charecter === "i" ||
// 			charecter === "o" ||
// 			charecter === "u"
// 		) {
// 			count++;
// 		}
// 	}

// 	return count;
// }

function countVowels(str) {
	str = str.toLowerCase();
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "a") count++;
		else if (str[i] === "e") count++;
		else if (str[i] === "i") count++;
		else if (str[i] === "o") count++;
		else if (str[i] === "u") count++;
	}

	return count;
}

module.exports = countVowels;
