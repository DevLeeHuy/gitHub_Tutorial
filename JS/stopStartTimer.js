var start = document.getElementById("start-btn");
var stop = document.getElementById("stop-btn");
var reset = document.getElementById("reset-btn");
var min = document.getElementById("runTime-min");
var sec = document.getElementById("runTime-sec");

let notRunning = true;
let run = false;

start.addEventListener("click", (e) => {
  e.preventDefault();
  run = true;
  runTime();
  notRunning = false; //prevent multi clicks on start
});

stop.addEventListener("click", (e) => {
  e.preventDefault();
  run = false; // stop the watch
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  resetTime();
});

function resetTime() {
  run = false;
  min.innerHTML = "00";
  sec.innerHTML = "00";
}

function runTime() {
  if (notRunning) {
    setInterval(() => {
      if (run) {
        let nowSec = showTime(sec);
        if (nowSec == "00") {
          showTime(min);
        }
      }
    }, 1000);
  }
}

function checkTime(i) {
  if (i < 10) return (i = "0" + i);
  if (i == 60) return "00";
  return i;
}

function showTime(path) {
  let count = path.innerHTML;
  count++;
  count = checkTime(count);
  path.innerHTML = count;
  return count;
}
