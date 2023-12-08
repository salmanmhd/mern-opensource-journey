/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ans = 0;
  let strArray = str.toLowerCase().split("");
  for (let i = 0; i < strArray.length; i++) {
    if (
      strArray[i] === "a" ||
      strArray[i] === "e" ||
      strArray[i] === "i" ||
      strArray[i] === "o" ||
      strArray[i] === "u"
    ) {
      ans++;
    }
  }
  return ans;
}

module.exports = countVowels;
