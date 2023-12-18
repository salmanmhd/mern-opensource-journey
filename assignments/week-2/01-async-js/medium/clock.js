function time() {
  const currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  const meridian = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  minutes = minutes <= 9 ? `0${minutes}` : minutes;
  seconds = seconds <= 9 ? `0${seconds}` : seconds;

  const formattedTime = `${hours}:${minutes}:${seconds} ${meridian}`;
  console.log(formattedTime);
}

setInterval(time, 1000);
