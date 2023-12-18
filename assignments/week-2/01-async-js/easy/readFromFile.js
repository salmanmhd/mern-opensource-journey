// 1 - Write code to read contents of a file and print it to the console.
// 2 - You can use the fs library to as a black box, the goal is to understand async tasks.
// 3 - Try to do an expensive operation below the file read and see how it affects the output.
// 4 - Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

const read = new Promise(function (resolve, reject) {
  fs.readFile("file.txt", "utf-8", function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

read
  .then((data) => {
    console.log("File content:", data);
    return new Promise((resolve) => {
    
      setTimeout(() => {
        console.log("Expensive operation completed");
        resolve();
      }, 2000); 
    });
  })
  .catch((err) => {
    console.log("Error reading file:", err);
  })
  .finally(() => {
    console.log("File read completed");
  });
