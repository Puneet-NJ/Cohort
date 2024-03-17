// const transactions = [
// 	{
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: "Food",
// 		itemName: "Pizza",
// 	},
// 	{
// 		id: 2,
// 		timestamp: 1656259600000,
// 		price: 20,
// 		category: "Food",
// 		itemName: "Burger",
// 	},
// 	{
// 		id: 3,
// 		timestamp: 1656019200000,
// 		price: 15,
// 		category: "Clothing",
// 		itemName: "T-Shirt",
// 	},
// 	{
// 		id: 4,
// 		timestamp: 1656364800000,
// 		price: 30,
// 		category: "Electronics",
// 		itemName: "Headphones",
// 	},
// 	{
// 		id: 5,
// 		timestamp: 1656105600000,
// 		price: 25,
// 		category: "Clothing",
// 		itemName: "Jeans",
// 	},
// ];
// function calculateTotalSpentByCategory(transactions) {
// 	const totalSpentByCategory = [];

// 	for (let i = 0; i < transactions.length; i++) {
// 		let priceSpentOnEachCategory = transactions[i].price;
// 		for (let j = i + 1; j < transactions.length; j++) {
// 			if (transactions[i].category === transactions[j].category) {
// 				priceSpentOnEachCategory += transactions[j].price;
// 			}
// 			console.log(priceSpentOnEachCategory);
// 		}
// 		console.log(priceSpentOnEachCategory);

// 		const isPresent = totalSpentByCategory.some(
// 			(transaction) => transaction.category === transactions[i].category
// 		);
// 		!isPresent &&
// 			totalSpentByCategory.push({
// 				category: transactions[i].category,
// 				totalSpent: priceSpentOnEachCategory,
// 			});
// 	}

// 	return totalSpentByCategory;
// }

// console.log(calculateTotalSpentByCategory(transactions));

// function isPalindrome(str) {
// 	str = str.toLowerCase();
// 	console.log(str);
// 	str = str.replace(/\W/g, "");
// 	console.log(str);

// 	for (let i = 0; i < Math.floor(str.length / 2); i++) {
// 		if (str[i] !== str[str.length - i - 1]) return false;
// 	}

// 	return true;
// }

// console.log(isPalindrome("Eva, can I see bees in a cave?"));

// cla

let nums = [1, 2, 3, 4];
// nums.slice(2, 3);
nums.splice(2, 1);
console.log(nums);
