// // const fs = require("fs");

// // // my own asynchronous function
// // function kiratsReadFile() {
// //   return new Promise(function (resolve) {
// //     fs.readFile("a.txt", "utf-8", function (err, data) {
// //       resolve(data);
// //     });
// //   });
// // }

// // // callback function to call
// // function onDone(data) {
// //   console.log(data);
// // }

// // kiratsReadFile().then(onDone);

// let newPromise = new Promise(function (resolve, reject) {
//   // do async task here
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Salman", class: 5 });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });
// // resolve - when  async task runs successfully
// // reject - when it fails

// // let userName;
// // newPromise
// //   .then(function (data) {
// //     console.log(data);
// //     userName = data.name;
// //     // return data.name;
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   })
// //   .finally(function () {
// //     console.log("The promise has been completed");
// //   });

// // console.log(userName);

// let storeValues;
// async function handlePromise() {
//   try {
//     const response = await newPromise;
//     storeValues = response;
//     // console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Hello");
//   }
// }

// handlePromise();
// console.log(storeValues);

async function calling(fn) {
  setTimeout(fn("Calling back"), 1000);
}

function newFunction(data) {
  console.log(data);
}

calling(newFunction);
