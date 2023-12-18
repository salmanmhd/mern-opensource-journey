const fs = require("fs");

const textToWrite = "This is the modified text in the file";

const write = new Promise((resolve, reject) => {
  fs.writeFile("changed.txt", textToWrite, "utf-8", function (err) {
    if (err) {
      reject("Error writing to file:", err);
    } else {
      resolve("Write operation completed");
    }
  });
});

const read = new Promise((resolve, reject) => {
  fs.readFile("changed.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

console.log("THE CODE STARTED");

write
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("WRITING COMMAND EXECUTED");

read
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("READ COMMAND EXECUTED");
