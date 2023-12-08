/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const answer = [];

  for (let i = 0; i < transactions.length; i++) {
    let isAvailable = false;
    for (let j = 0; j < answer.length; j++) {
      if (answer[j].category === transactions[i].category) {
        answer[j].totalSpent += transactions[i].price;
        isAvailable = true;
      }
    }
    if (!isAvailable) {
      answer.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }

  return answer;
}

module.exports = calculateTotalSpentByCategory;
