# WEEK 1

## Why Languages?

Programming languages are a way for humans to communicate instructions to computers. They allow us to write code that can be executed by machines.

## Interpreted vs Compiled Language

- **Interpreted:** Code is executed line by line at runtime (e.g., Python, JavaScript).
- **Compiled:** Code is translated into machine code before runtime (e.g., C, C++).

## Static vs Dynamic Languages

- **Static:** Variable types are known at compile time (e.g., C, Java).
- **Dynamic:** Variable types are determined at runtime (e.g., Python, JavaScript).

## Single-Threaded Nature of Js

JavaScript is single-threaded, meaning it executes one operation at a time. Asynchronous features, like callbacks and Promises, help manage concurrency.

## Simple Primitives in Js (Number, Strings, Boolean)

- **Number:** Represents numeric data.
- **String:** Represents textual data.
- **Boolean:** Represents true or false.
- We don't need to specify the data type in Js.
  ```js
  let number = 5;
  let string = "Hello WOrld!";
  let boolean = true;
  ```

## Complex Primitives in Js (Arrays, Objects)

- **Arrays:** Ordered collections of values.
- **Objects:** Unordered collections of key-value pairs.

```Js
const arr = [1,2,3,4,5,"array can contain different data types", true];

const obj = {
    name: "Rahul",
    id: 213,
}
```

## Functions in Js

Functions in JavaScript are reusable blocks of code. They can take parameters, perform actions, and return values.

```JS
function sum(a, b){
    return a + b;
}
```

## Class

```Js
const obj = {
  name: "Salman",
  class: 5,
  roll: 2,
};

const obj1 = {
  hobbies: "Sports",
  wannaBeLeader: "Yes",
};

const newObj = Object.assign({}, obj, obj1); // this will not make changes in the original object
const newObj1 = Object.assign(obj, obj1); // this will change the first object as combined.

console.log(obj);
console.log(obj1);
console.log(newObj);

```

## Async

## Js Browser Architecture

### Call Stack:

    The call stack is a data structure that keeps track of function calls in a JavaScript program.
    When a function is invoked, a new frame is added to the top of the call stack, representing the function call.
    The JavaScript engine processes the functions in a last-in, first-out (LIFO) manner.

### Web APIs:

    Web APIs (Application Programming Interfaces) are provided by the browser and include functionalities like DOM manipulation, AJAX requests, and timers (setTimeout, setInterval).
    Functions provided by Web APIs are executed outside the JavaScript runtime environment.

### Callback Queue:

    When asynchronous operations, like AJAX requests or setTimeout, are completed, their callbacks are pushed into the callback queue.
    Callback queue stores functions to be executed after the call stack is empty.

### Event Loop:

    The event loop constantly checks the call stack and the callback queue.
    If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack.
    This mechanism allows asynchronous operations to be handled without blocking the main thread.

## Promise

```js
let newPromise = new Promise(function (resolve, reject) {
  //do async task here
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: "Salman", class: 5 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
// resolve - when  async task runs successfully
// reject - when it fails

//HANDLING RESPONSE - USING THEN AND CATCH
newPromise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise completed");
  });

// HANDLING RESPONSE - USINF ASYNC AWAIT

async function handlePromise() {
  try {
    const response = await newPromise;
    console.log(response);
  } catch (error) {}
}
```
