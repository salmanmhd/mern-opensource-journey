# WEEK 1 - DAY 2

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
