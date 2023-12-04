let capital = 10000; // Principal amount
let years = 5; // Time in years
let interest = 10; // Annual interest rate in percentage

// Convert the interest rate to decimal form
let rate = interest / 100;

// Set the number of times interest is compounded per year
let n = 1; // Assuming interest is compounded annually

// Calculate the compound interest
const result = capital * Math.pow(1 + rate / n, n * years) - capital;

console.log("Compound Interest:", result.toFixed(0));
