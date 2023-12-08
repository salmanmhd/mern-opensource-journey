/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerCaseStr = str.toLowerCase();
  // let reversedStr = lowerCaseStr.split("").reverse().join("");
  let pureStr = [];

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let ascii = lowerCaseStr.charCodeAt(i);
    if (ascii >= 97 && ascii <= 122) {
      pureStr.push(lowerCaseStr.charAt(i));
    }
  }

  let newStr = pureStr.join("");
  let reversedNewStr = pureStr.reverse().join("");

  return newStr === reversedNewStr;
}

module.exports = isPalindrome;
