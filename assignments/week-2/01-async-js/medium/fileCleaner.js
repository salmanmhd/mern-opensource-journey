// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// const { rejects } = require("assert");
// const { resolve } = require("path");
const fs = require("fs");

const read = new Promise((resolve, reject) => {
  fs.readFile("detail.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

read
  .then((data) => {
    const cleanedStr = data.replace(/\s+/g, " ");

    const write = new Promise((resolve, reject) => {
      fs.writeFile("detail.txt", cleanedStr, "utf-8", function (err) {
        if (err) {
          reject("Error writing to file:", err);
        } else {
          resolve("Writing complete");
        }
      });
    });

    return write;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("TASK INITIATED");
