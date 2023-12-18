let a = 0;
function counter() {
  a += 1;
  console.log(a);
}

function startTimer() {
  setInterval(counter, 1000);
}

startTimer();
