/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// TC: O(N^2)
// function calculateTotalSpentByCategory(transactions) {
// 	const answer = [];

// 	for (let i = 0; i < transactions.length; i++) {
// 		const refCategory = transactions[i].category;
// 		let price = transactions[i].price;

// 		if (transactions[i].checked) {
// 			delete transactions[i].checked;
// 			continue;
// 		}

// 		for (let j = i + 1; j < transactions.length; j++) {
// 			if (transactions[j].category === refCategory) {
// 				price += transactions[j].price;
// 				transactions[j].checked = true;
// 			}
// 		}

// 		const ansCategory = { category: refCategory, totalSpent: price };
// 		answer.push(ansCategory);
// 	}

// 	return answer;
// }
const transactions = [
	{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: "Food",
		itemName: "Pizza",
	},
	{
		id: 2,
		timestamp: 1656259600000,
		price: 20,
		category: "Food",
		itemName: "Burger",
	},
	{
		id: 3,
		timestamp: 1656019200000,
		price: 15,
		category: "Clothing",
		itemName: "T-Shirt",
	},
	{
		id: 4,
		timestamp: 1656364800000,
		price: 30,
		category: "Electronics",
		itemName: "Headphones",
	},
	{
		id: 5,
		timestamp: 1656105600000,
		price: 25,
		category: "Clothing",
		itemName: "Jeans",
	},
];
function calculateTotalSpentByCategory(transactions) {
	const totalSpentByCategory = [];

	for (let i = 0; i < transactions.length; i++) {
		let priceSpentOnEachCategory = transactions[i].price;
		for (let j = i + 1; j < transactions.length; j++) {
			if (transactions[i].category === transactions[j].category) {
				priceSpentOnEachCategory += transactions[j].price;
			}
		}

		const isPresent = totalSpentByCategory.some(
			(transaction) => transaction.category === transactions[i].category
		);
		!isPresent &&
			totalSpentByCategory.push({
				category: transactions[i].category,
				totalSpent: priceSpentOnEachCategory,
			});
	}

	return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
