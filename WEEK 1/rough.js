function sum(num1, num2) {
  let result = num1 + num2;
  displayResult(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
  displayResultPassive(data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

sum(1, 4);
// You are only allowed to call one function after this
// How will you displayResult of a sum
