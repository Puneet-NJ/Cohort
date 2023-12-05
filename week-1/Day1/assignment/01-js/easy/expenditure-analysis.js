/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// TC: O(N^2)
function calculateTotalSpentByCategory(transactions) {
	const answer = [];

	for (let i = 0; i < transactions.length; i++) {
		const refCategory = transactions[i].category;
		let price = transactions[i].price;

		if (transactions[i].checked) {
			delete transactions[i].checked;
			continue;
		}

		for (let j = i + 1; j < transactions.length; j++) {
			if (transactions[j].category === refCategory) {
				price += transactions[j].price;
				transactions[j].checked = true;
			}
		}

		const ansCategory = { category: refCategory, totalSpent: price };
		answer.push(ansCategory);
	}

	return answer;
}

module.exports = calculateTotalSpentByCategory;
