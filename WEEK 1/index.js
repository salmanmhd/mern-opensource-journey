// 1 - print the greeting according to the gender
let gender1 = "M";
let gender2 = "F";

// if (gender1 === "M") console.log("Hey Man");
// if (gender2 === "F") console.log("Hey Girl");

// 2  - print sum from 1 - 100
let answer = 0;
for (let i = 1; i <= 100; i++) {
  answer = answer + i;
}
// console.log(answer);

// 3 - Print all the even number in array
const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

for (let index = 0; index < arr.length; index++) {
  if (arr[index] % 2 === 0) {
    // console.log(arr[index]);
  }
}

// 4 - Print the biggest number in the array
const arr1 = [1, 2, 34, 65, 87, 345, 234, 12, 1, 76, 4567, 8765, 342, 321];
let largest = 0;
arr1.forEach((element) => {
  if (element > largest) {
    largest = element;
  }
});
// console.log(largest);

// 5 - prints male people first name given a complex object
const people = [
  {
    name: "Rahul",
    gender: "M",
  },
  {
    name: "Ashtha",
    gender: "F",
  },
  {
    name: "Jain",
    gender: "M",
  },
  {
    name: "Arushi",
    gender: "F",
  },
  {
    name: "Shadab",
    gender: "M",
  },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].gender === "M") {
    // console.log(people[i].name);
  }
}

// 6 - reverse all the element of an array
const newArr = [1, 2, 3, 4, 5, 6, 7]; // 7,6,5,4,3,2,1 ||

// 7 - create a function to find the sum of two numbers

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));
