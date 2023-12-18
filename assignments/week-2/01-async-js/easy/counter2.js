// Without using setInterval, try to code a counter in Javascript. Using setTimeout

// let a = 0;
// function counter() {
//   a += 1;
//   console.log(a);
// }

// setTimeout(counter, 2000);

function startCounter(count, limit) {
  if (count <= limit) {
    console.log(count);
    count++;
    setTimeout(() => startCounter(count, limit), 1000); // 1000 milliseconds (1 second) delay
  }
}

// Start the counter from 1 and count up to 5
startCounter(1, 10);
