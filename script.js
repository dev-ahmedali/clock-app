let hours = document.getElementById("hour");
let minutes = document.getElementById("min");
let secondes = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hrRotation = 30 * hh + mm / 2;
  let minRotation = 6 * mm;
  let secRotation = 6 * ss;

  hours.style.transform = `rotate(${hrRotation}deg)`;
  minutes.style.transform = `rotate(${minRotation}deg)`;
  secondes.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000);
